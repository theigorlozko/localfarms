import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const {cognitoId} = req.params;
        const user = await prisma.user.findUnique({
            where:{cognitoId},
            include :{
                favorites: true
            }
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

