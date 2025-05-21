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
exports.createVendor = exports.getVendor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const user = yield prisma.user.findUnique({
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
    }
    catch (error) {
        res.status(500).json({ message: `Error retrieving vendor: ${error.message}` });
    }
});
exports.getVendor = getVendor;
const createVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, name, email, phoneNumber, plan } = req.body;
        // Step 1: Get the user by Cognito ID
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        // Step 2: Prevent duplicate vendor creation
        const existingVendor = yield prisma.vendor.findUnique({
            where: { userId: user.id },
        });
        if (existingVendor) {
            res.status(400).json({ message: "Vendor already exists for this user" });
            return;
        }
        // Step 3: Create vendor
        const vendor = yield prisma.vendor.create({
            data: {
                userId: user.id,
                name,
                email,
                phoneNumber,
                plan, // optional, based on your frontend
            },
        });
        // Step 4: Update user's role to VENDOR
        yield prisma.user.update({
            where: { id: user.id },
            data: { role: "VENDOR" },
        });
        res.status(201).json(vendor);
    }
    catch (error) {
        res.status(500).json({ message: `Error creating vendor: ${error.message}` });
    }
});
exports.createVendor = createVendor;
