"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopsControllers_1 = require("../controllers/shopsControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const router = express_1.default.Router();
router.get("/", shopsControllers_1.getShops); // get the buyer information
router.get("/:id", shopsControllers_1.getShop); // get the buyer information
router.post("/", (0, authMiddleware_1.authMiddleware)(["vendor"]), // only vendor can create a shop
upload.array("photos"), shopsControllers_1.createShop); // cretae Buyer if it doesnt exist
exports.default = router;
