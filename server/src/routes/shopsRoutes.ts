import express from 'express';
import {
    getShops,
    getShop,
   createShop
} from '../controllers/shopsControllers';
import { authMiddleware } from '../middleware/authMiddleware';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getShops); // get the buyer information
router.get("/:id", getShop); // get the buyer information
router.post("/",
  authMiddleware(["vendor"]), // only vendor can create a shop
  upload.array("photos"),
  createShop); // cretae Buyer if it doesnt exist

export default router;