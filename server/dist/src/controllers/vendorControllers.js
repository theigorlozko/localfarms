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
exports.getVendorShops = exports.updateVendor = exports.createVendor = exports.getVendor = void 0;
const client_1 = require("@prisma/client");
const wkt_1 = require("@terraformer/wkt");
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
const updateVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { name, email, phoneNumber } = req.body;
        // Update user
        console.log("Trying to create user with:", req.body);
        const updateVendor = yield prisma.user.update({
            where: { id: parseInt(userId, 10) },
            data: {
                name,
                email,
                phoneNumber,
                role: "BUYER", // Default role
            },
        });
        res.json(updateVendor);
    }
    catch (error) {
        res.status(500).json({ message: `Error updating vendor: ${error.message}` });
    }
});
exports.updateVendor = updateVendor;
const getVendorShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        // Step 1: Get the user and include the linked vendor
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
            include: {
                vendor: true,
            },
        });
        if (!user || !user.vendor) {
            res.status(404).json({ message: "Vendor not found" });
            return; // optional, just to end the function early
        }
        // Step 2: Use vendorId to find shops
        const shops = yield prisma.vendorShop.findMany({
            where: { vendorId: user.vendor.id },
            include: {
                location: true,
            },
        });
        // Step 3: Format location coordinates
        const shopsWithFormattedLocation = yield Promise.all(shops.map((shop) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const coordinates = yield prisma.$queryRaw `
            SELECT ST_AsText(coordinates) as coordinates FROM "Location" WHERE id = ${shop.location.id}
          `;
            const geoJSON = (0, wkt_1.wktToGeoJSON)(((_a = coordinates[0]) === null || _a === void 0 ? void 0 : _a.coordinates) || "");
            const longitude = geoJSON.coordinates[0];
            const latitude = geoJSON.coordinates[1];
            return Object.assign(Object.assign({}, shop), { location: Object.assign(Object.assign({}, shop.location), { coordinates: {
                        longitude,
                        latitude,
                    } }) });
        })));
        res.json(shopsWithFormattedLocation);
    }
    catch (err) {
        res.status(500).json({ message: `Error retrieving vendor shops: ${err.message}` });
    }
});
exports.getVendorShops = getVendorShops;
