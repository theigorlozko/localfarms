import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getVendor = async (req: Request, res: Response): Promise<void> => {
    try {
      const { cognitoId } = req.params;
  
      const user = await prisma.user.findUnique({
        where: { cognitoId },
        include: {
          vendor: {
            include: { vendorShops: true }, // optional
          },
        },
      });
  
      if (!user || !user.vendor) {
        res.status(404).json({ message: "Vendor not found" });
        return;
      }
  
      res.json(user.vendor);
    } catch (error: any) {
      res.status(500).json({ message: `Error retrieving vendor: ${error.message}` });
    }
  };
  

export const createVendor = async (req: Request, res: Response): Promise<void> => {
    try {
      const { cognitoId, name, email, phoneNumber, plan } = req.body;
  
      // Step 1: Get the user by Cognito ID
      const user = await prisma.user.findUnique({
        where: { cognitoId },
      });
  
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
  
      // Step 2: Prevent duplicate vendor creation
      const existingVendor = await prisma.vendor.findUnique({
        where: { userId: user.id },
      });
  
      if (existingVendor) {
        res.status(400).json({ message: "Vendor already exists for this user" });
        return;
      }
  
      // Step 3: Create vendor
      const vendor = await prisma.vendor.create({
        data: {
          userId: user.id,
          name,
          email,
          phoneNumber,
          plan, // optional, based on your frontend
        },
      });
  
      // Step 4: Update user's role to VENDOR
      await prisma.user.update({
        where: { id: user.id },
        data: { role: "VENDOR" },
      });
  
      res.status(201).json(vendor);
    } catch (error: any) {
      res.status(500).json({ message: `Error creating vendor: ${error.message}` });
    }
  };  

  export const updateVendor = async (req: Request, res: Response): Promise<void> => {
      try {
          const { userId } = req.params;
          const { name, email, phoneNumber } = req.body;
  
          // Update user
          console.log("Trying to create user with:", req.body);
          const updateVendor = await prisma.user.update({
              where: { id: parseInt(userId, 10) },
              data: {
                  name,
                  email,
                  phoneNumber,
                  role: "BUYER", // Default role
              },
          });
  
          res.json(updateVendor);
      } catch (error: any) {
          res.status(500).json({ message: `Error updating vendor: ${error.message}` });
      }
  };

