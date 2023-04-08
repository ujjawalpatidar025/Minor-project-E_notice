import express from "express";
import { createquerysolution } from "../../controllers/Query/query.js"
import { verifyToken } from "../../verifyToken.js";
const router=express.Router();

router.post("/:id", verifyToken, createquerysolution);
export default router;