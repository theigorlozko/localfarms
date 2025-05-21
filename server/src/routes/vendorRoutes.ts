import express from 'express';
import {
    getVendor,
    createVendor
} from '../controllers/vendorControllers';

const router = express.Router();

router.get("/:cognitoId", getVendor); // get the vendor information
router.post("/", createVendor); // cretae vendor if it doesnt exist

export default router;