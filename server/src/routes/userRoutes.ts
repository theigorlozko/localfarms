import express from 'express';
import {
    getUser,
    createUser
} from '../controllers/userControllers';

const router = express.Router();

router.get("/:cognitoId", getUser); // get the buyer information
router.post("/", createUser); // cretae Buyer if it doesnt exist

export default router;