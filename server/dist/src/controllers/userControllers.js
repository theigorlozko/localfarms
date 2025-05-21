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
exports.createUser = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
            include: {
                favorites: true
            }
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
