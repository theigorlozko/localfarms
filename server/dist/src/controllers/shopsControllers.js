"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShop = exports.getShop = exports.getShops = void 0;
const client_1 = require("@prisma/client");
const wkt_1 = require("@terraformer/wkt");
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const axios_1 = __importDefault(require("axios"));
const prisma = new client_1.PrismaClient();
const s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
});
const getShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { favoriteIds, priceMin, priceMax, vendorShopType, productCategory, latitude, longitude, products, } = req.query;
        let whereConditions = [];
        if (favoriteIds) {
            const ids = favoriteIds.split(",").map(Number);
            whereConditions.push(client_1.Prisma.sql `vs.id IN (${client_1.Prisma.join(ids)})`);
        }
        if (vendorShopType && vendorShopType !== "any") {
            whereConditions.push(client_1.Prisma.sql `vs."vendorShopType" = ${vendorShopType}::"VendorShopType"`);
        }
        if (productCategory) {
            const categories = productCategory.split(",");
            whereConditions.push(client_1.Prisma.sql `vs."productCategory" @> ${categories}::"ProductCategory"[]`);
        }
        if (latitude && longitude) {
            const lat = parseFloat(latitude);
            const lng = parseFloat(longitude);
            const radiusKm = 1000;
            const deg = radiusKm / 111;
            whereConditions.push(client_1.Prisma.sql `ST_DWithin(
            l.coordinates::geometry,
            ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
            ${deg}
            )`);
        }
        // ✨ Price filter is based on product prices inside vendorShops
        let priceJoin = client_1.Prisma.empty;
        if (priceMin || priceMax) {
            priceJoin = client_1.Prisma.sql `JOIN "Product" pr ON pr."vendorShopId" = vs.id`;
            if (priceMin) {
                whereConditions.push(client_1.Prisma.sql `pr.price >= ${Number(priceMin)}`);
            }
            if (priceMax) {
                whereConditions.push(client_1.Prisma.sql `pr.price <= ${Number(priceMax)}`);
            }
        }
        // Selecting everything from vendor shop and building return from the database
        const completeQuery = client_1.Prisma.sql ` 
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
        ${priceJoin}
        ${whereConditions.length > 0
            ? client_1.Prisma.sql `WHERE ${client_1.Prisma.join(whereConditions, " AND ")}`
            : client_1.Prisma.empty}
        GROUP BY vs.id, l.id
        `;
        const results = yield prisma.$queryRaw(completeQuery);
        res.json(results);
    }
    catch (error) {
        res.status(500).json({ message: `Error retrieving shops: ${error.message}` });
    }
});
exports.getShops = getShops;
const getShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        const shop = yield prisma.vendorShop.findUnique({
            where: { id: Number(id) },
            include: {
                location: true
            },
        });
        if (shop) {
            const coordinates = yield prisma.$queryRaw `SELECT ST_asText(coordinates) as coordinates FROM "Location" WHERE id = ${shop.location.id}`;
            const geoJSON = (0, wkt_1.wktToGeoJSON)(((_a = coordinates[0]) === null || _a === void 0 ? void 0 : _a.coordinates) || "");
            const longitude = geoJSON.coordinates[0];
            const latitude = geoJSON.coordinates[1];
            const shopWithCoordinates = Object.assign(Object.assign({}, shop), { location: Object.assign(Object.assign({}, shop.location), { coordinates: {
                        longitude,
                        latitude
                    } }) });
            res.json(shopWithCoordinates); // pass to frontend 
        }
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error retrieving shop: ${err.message}` });
    }
});
exports.getShop = getShop;
// whitin the create shop needs to add add products to the vendor shop.
const createShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const files = req.files;
        const _c = req.body, { address, city, state, country, postalCode, vendorId } = _c, shopData = __rest(_c, ["address", "city", "state", "country", "postalCode", "vendorId"]);
        const photoUrls = yield Promise.all(files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const uploadParams = {
                Bucket: process.env.S3_BUCKET_NAME,
                Key: `shops/${Date.now()}-${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimetype,
            };
            const uploadResult = yield new lib_storage_1.Upload({
                client: s3Client,
                params: uploadParams,
            }).done();
            return uploadResult.Location;
        })));
        const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams({
            street: address,
            city,
            country,
            postalcode: postalCode,
            format: "json",
            limit: "1",
        }).toString()}`;
        const geocodingResponse = yield axios_1.default.get(geocodingUrl, {
            headers: {
                "User-Agent": "GoLocalApp (admin@golocal.ie)",
            },
        });
        const [longitude, latitude] = ((_a = geocodingResponse.data[0]) === null || _a === void 0 ? void 0 : _a.lon) && ((_b = geocodingResponse.data[0]) === null || _b === void 0 ? void 0 : _b.lat)
            ? [
                parseFloat(geocodingResponse.data[0].lon),
                parseFloat(geocodingResponse.data[0].lat),
            ]
            : [0, 0];
        // Create location record
        const [location] = yield prisma.$queryRaw `
            INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
            VALUES (${address}, ${city}, ${state}, ${country}, ${postalCode}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
            RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
          `;
        // Create vendor shop
        const newShop = yield prisma.vendorShop.create({
            data: Object.assign(Object.assign({}, shopData), { photoUrls, locationId: location.id, vendorId: parseInt(vendorId), productCategory: typeof shopData.productCategory === "string"
                    ? shopData.productCategory.split(",")
                    : [], shopHighlight: typeof shopData.shopHighlight === "string"
                    ? shopData.shopHighlight.split(",")
                    : [], isParkingIncluded: shopData.isParkingIncluded === "true", slug: shopData.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)+/g, "")
                    + `-${Date.now()}` }),
            include: {
                location: true,
                vendor: true,
            },
        });
        res.status(201).json(newShop);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error creating shop: ${err.message}` });
    }
});
exports.createShop = createShop;
