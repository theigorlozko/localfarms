"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vendorControllers_1 = require("../controllers/vendorControllers");
const router = express_1.default.Router();
router.get("/:cognitoId", vendorControllers_1.getVendor); // get the vendor information
router.put("/:cognitoId", vendorControllers_1.updateVendor); // get the buyer information
router.get("/:cognitoId/shops", vendorControllers_1.getVendorShops); // get the buyer information
router.post("/", vendorControllers_1.createVendor); // cretae vendor if it doesnt exist
exports.default = router;
