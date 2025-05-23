import express from 'express';
import {
    getVendor,
    createVendor,
    updateVendor,
    getVendorShops
} from '../controllers/vendorControllers';

const router = express.Router();

router.get("/:cognitoId", getVendor); // get the vendor information
router.put("/:cognitoId", updateVendor); // get the buyer information
router.get("/:cognitoId/shops", getVendorShops); // get the buyer information
router.post("/", createVendor); // cretae vendor if it doesnt exist

export default router;