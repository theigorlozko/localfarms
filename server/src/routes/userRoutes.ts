import express from 'express';
import {
    getUser,
    createUser,
    updateUser,
    addFavoriteShop,
    removeFavoriteShop
} from '../controllers/userControllers';

const router = express.Router();

router.get("/:cognitoId", getUser); // get the buyer information
router.put("/:cognitoId", updateUser); // get the buyer information
router.post("/", createUser); // cretae Buyer if it doesnt exist
router.post("/:cognitoId/favorites/:vendorShopId", addFavoriteShop); // cretae Buyer if it doesnt exist
router.delete("/:cognitoId/favorites/:vendorShopId", removeFavoriteShop); // cretae Buyer if it doesnt exist

export default router;