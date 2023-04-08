import express from "express";
import {deleteQuery} from '../../controllers/Query/query.js'
import { verifyToken } from "../../verifyToken.js";
const router=express.Router();

router.put("/:id", verifyToken, deleteQuery);
export default router;