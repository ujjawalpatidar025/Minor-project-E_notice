import express from "express";
import {createquery} from '../../controllers/Query/query.js'
const router=express.Router();

router.post("/", createquery);
export default router;