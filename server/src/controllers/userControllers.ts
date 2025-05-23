import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const {cognitoId} = req.params;
        const user = await prisma.user.findUnique({
            where:{cognitoId},
            select: {
                id: true,
                cognitoId: true,
                name: true,
                email: true,
                phoneNumber: true,
                role: true,
                favorites: true, // Assuming `favorites` is a relation
              },
        });
        if(user){
            res.json(user)
        } else {
            res.status(404).json({message: "User not found"})
        }
    }catch(error: any){
        res.status(500).json({message: `Error retrieving user: ${error.message}`})
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { cognitoId },
        });

        if (existingUser) {
            res.status(200).json(existingUser);
            return;
        }

        // Create a new user
        console.log("Trying to create user with:", req.body);
        const user = await prisma.user.create({
            data: {
                cognitoId,
                name,
                email,
                phoneNumber,
                role: "BUYER", // Default role
            },
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating user: ${error.message}` });
    }
};
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const { name, email, phoneNumber } = req.body;

        // Update user
        console.log("Trying to create user with:", req.body);
        const updateUser = await prisma.user.update({
            where: { cognitoId },
            data: {
                name,
                email,
                phoneNumber,
                role: "BUYER", // Default role
            },
        });

        res.json(updateUser);
    } catch (error: any) {
        res.status(500).json({ message: `Error updating user: ${error.message}` });
    }
};

export const addFavoriteShop = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cognitoId, vendorShopId} = req.params; // sending cognitoId and the VendorShopId 
        const user = await prisma.user.findUnique({
            where: { cognitoId },
            include: {
                favorites: true, // Include the favorites relation
            },
        })

        const shopIdNumber = Number(vendorShopId);
        const existingFavorites = user?.favorites || [];

        // checking is the favorite already exists
        if(!existingFavorites.some((fav)=> fav.id === shopIdNumber)){
           const updatedUser = await prisma.user.update({
            where: { cognitoId },
            data: {
                favorites: {
                    connect: { id: shopIdNumber }, // Connect the new favorite shop
                },
            },
            include: {
                favorites: true, // Include the updated favorites
            },
           }) 
           res.json(updatedUser);
        }else {
            res.status(409).json({message: "Shop already in favorites"});
        }
      
    } catch (err: any) {
      res.status(500).json({ message: `Error adding favorite shop: ${err.message}` });
    }
};

export const removeFavoriteShop = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cognitoId, vendorShopId} = req.params; // sending cognitoId and the VendorShopId 
        const shopIdNumber = Number(vendorShopId);
        const updatedUser = await prisma.user.update({
            where: { cognitoId },
            data: {
                favorites: {
                    disconnect: { id: shopIdNumber }, // Connect the new favorite shop
                },
            },
            include: {
                favorites: true, // Include the updated favorites
            },
           }) 
           res.json(updatedUser);
    } catch (err: any) {
      res.status(500).json({ message: `Error removing favorite shop: ${err.message}` });
    }
};



