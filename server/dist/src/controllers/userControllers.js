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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFavoriteShop = exports.addFavoriteShop = exports.updateUser = exports.createUser = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
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
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: `Error retrieving user: ${error.message}` });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;
        // Check if the user already exists
        const existingUser = yield prisma.user.findUnique({
            where: { cognitoId },
        });
        if (existingUser) {
            res.status(200).json(existingUser);
            return;
        }
        // Create a new user
        console.log("Trying to create user with:", req.body);
        const user = yield prisma.user.create({
            data: {
                cognitoId,
                name,
                email,
                phoneNumber,
                role: "BUYER", // Default role
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: `Error creating user: ${error.message}` });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const { name, email, phoneNumber } = req.body;
        // Update user
        console.log("Trying to create user with:", req.body);
        const updateUser = yield prisma.user.update({
            where: { cognitoId },
            data: {
                name,
                email,
                phoneNumber,
                role: "BUYER", // Default role
            },
        });
        res.json(updateUser);
    }
    catch (error) {
        res.status(500).json({ message: `Error updating user: ${error.message}` });
    }
});
exports.updateUser = updateUser;
const addFavoriteShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, vendorShopId } = req.params; // sending cognitoId and the VendorShopId 
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
            include: {
                favorites: true, // Include the favorites relation
            },
        });
        const shopIdNumber = Number(vendorShopId);
        const existingFavorites = (user === null || user === void 0 ? void 0 : user.favorites) || [];
        // checking is the favorite already exists
        if (!existingFavorites.some((fav) => fav.id === shopIdNumber)) {
            const updatedUser = yield prisma.user.update({
                where: { cognitoId },
                data: {
                    favorites: {
                        connect: { id: shopIdNumber }, // Connect the new favorite shop
                    },
                },
                include: {
                    favorites: true, // Include the updated favorites
                },
            });
            res.json(updatedUser);
        }
        else {
            res.status(409).json({ message: "Shop already in favorites" });
        }
    }
    catch (err) {
        res.status(500).json({ message: `Error adding favorite shop: ${err.message}` });
    }
});
exports.addFavoriteShop = addFavoriteShop;
const removeFavoriteShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, vendorShopId } = req.params; // sending cognitoId and the VendorShopId 
        const shopIdNumber = Number(vendorShopId);
        const updatedUser = yield prisma.user.update({
            where: { cognitoId },
            data: {
                favorites: {
                    disconnect: { id: shopIdNumber }, // Connect the new favorite shop
                },
            },
            include: {
                favorites: true, // Include the updated favorites
            },
        });
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ message: `Error removing favorite shop: ${err.message}` });
    }
});
exports.removeFavoriteShop = removeFavoriteShop;
