"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router.get("/:cognitoId", userControllers_1.getUser); // get the buyer information
router.put("/:cognitoId", userControllers_1.updateUser); // get the buyer information
router.post("/", userControllers_1.createUser); // cretae Buyer if it doesnt exist
router.post("/:cognitoId/favorites/:vendorShopId", userControllers_1.addFavoriteShop); // cretae Buyer if it doesnt exist
router.delete("/:cognitoId/favorites/:vendorShopId", userControllers_1.removeFavoriteShop); // cretae Buyer if it doesnt exist
exports.default = router;
