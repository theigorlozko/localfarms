import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import axios from "axios";
import { Location } from "@prisma/client";

const prisma = new PrismaClient();

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
})

export const getShops = async (req: Request, res: Response): Promise<void> => {
  try {
      const {
          favoriteIds,
          priceMin,
          priceMax,
          vendorShopType,
          productCategory,
          latitude,
          longitude,
      } = req.query;

      let whereConditions: Prisma.Sql[] = [];

      if (vendorShopType && vendorShopType !== "any") {
          whereConditions.push(
              Prisma.sql`vs."vendorShopType" = ${vendorShopType}::"VendorShopType"`
          );
      }

      if (typeof productCategory === "string" && productCategory.length > 0) {
          const categories = (productCategory as string).split(",");
          whereConditions.push(
              Prisma.sql`vs."productCategory" @> ${categories}::"ProductCategory"[]`
          );
      }

      if (latitude && longitude) {
          const lat = parseFloat(latitude as string);
          const lng = parseFloat(longitude as string);
          const radiusKm = 1000; 
          const deg = radiusKm / 111;

          whereConditions.push(
              Prisma.sql`ST_DWithin(
                  l.coordinates::geometry,
                  ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
                  ${deg}
              )`
          );
      }

      const completeQuery = Prisma.sql`
          SELECT
              vs.*,
              json_build_object(
                  'id', l.id,
                  'address', l.address,
                  'city', l.city,
                  'state', l.state,
                  'country', l.country,
                  'postalCode', l."postalCode",
                  'coordinates', json_build_object(
                      'longitude', ST_X(l."coordinates"::geometry),
                      'latitude', ST_Y(l."coordinates"::geometry)
                  )
              ) AS location
          FROM "VendorShop" vs
          JOIN "Location" l ON vs."locationId" = l.id
          ${
              whereConditions.length > 0
                  ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
                  : Prisma.empty
          }
          GROUP BY vs.id, l.id
      `;

      const results = await prisma.$queryRaw(completeQuery);

      res.json(results);
  } catch (error: any) {
      console.error("Error retrieving shops:", error);
      res.status(500).json({ message: `Error retrieving shops: ${error.message}` });
  }
};

export const getShop = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const shop = await prisma.vendorShop.findUnique({
            where: {id: Number(id)},
            include:{
                location: true
            },
        });

        if (shop){
            const coordinates: {coordinates: string}[] = 
            await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates FROM "Location" WHERE id = ${shop.location.id}`;
        
            const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
            const longitude = geoJSON.coordinates[0];
            const latitude = geoJSON.coordinates[1];

            const shopWithCoordinates = {
                ...shop,
                location: {
                    ...shop.location,
                    coordinates: {
                        longitude,
                        latitude
                    }
                }
            }
            res.json(shopWithCoordinates); // pass to frontend 
            
        }
    }catch(err: any){
        res
            .status(500)
            .json({message: `Error retrieving shop: ${err.message}`})
    }
};

// whitin the create shop needs to add add products to the vendor shop.
export const createShop = async (req: Request, res: Response): Promise<void> => {
    try{
        const files = req.files as Express.Multer.File[];
        const {
            address,
            city,
            state,
            country,
            postalCode,
            vendorId,
            ...shopData
        } = req.body;

        const photoUrls = await Promise.all(
            files.map(async (file) => {
              const uploadParams = {
                Bucket: process.env.S3_BUCKET_NAME!,
                Key: `shops/${Date.now()}-${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimetype,
              };
      
              const uploadResult = await new Upload({
                client: s3Client,
                params: uploadParams,
              }).done();
      
              return uploadResult.Location;
            })
          );
      
          const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams({
            street: address,
            city,
            country,
            postalcode: postalCode,
            format: "json",
            limit: "1",
          }).toString()}`;
      
          const geocodingResponse = await axios.get(geocodingUrl, {
            headers: {
              "User-Agent": "GoLocalApp (admin@golocal.ie)",
            },
          });
      
          const [longitude, latitude] =
            geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
              ? [
                  parseFloat(geocodingResponse.data[0].lon),
                  parseFloat(geocodingResponse.data[0].lat),
                ]
              : [0, 0];
      
          // Create location record
          const [location] = await prisma.$queryRaw<Location[]>`
            INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
            VALUES (${address}, ${city}, ${state}, ${country}, ${postalCode}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
            RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
          `;
      
          // Create vendor shop
          const newShop = await prisma.vendorShop.create({
            data: {
              ...shopData,
              photoUrls,
              locationId: location.id,
              vendorId: parseInt(vendorId),
              productCategory: typeof shopData.productCategory === "string"
                ? shopData.productCategory.split(",")
                : [],
              shopHighlight: typeof shopData.shopHighlight === "string"
                ? shopData.shopHighlight.split(",")
                : [],
              isParkingIncluded: shopData.isParkingIncluded === "true",
              slug: shopData.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "")
                + `-${Date.now()}`,
            },
            include: {
              location: true,
              vendor: true,
            },
          });
      
          res.status(201).json(newShop);
    }catch(err: any){
        res
            .status(500)
            .json({message: `Error creating shop: ${err.message}`})
    }
};

