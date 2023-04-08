import express from "express";
import {createquery} from '../../controllers/Query/query.js'
import { verifyToken } from "../../verifyToken.js";
const router=express.Router();

router.post("/", verifyToken, createquery);
export default router;