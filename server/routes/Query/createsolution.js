import express from "express";
import { createquerysolution } from "../../controllers/Query/query.js"
const router=express.Router();

router.post("/", createquerysolution);
export default router;