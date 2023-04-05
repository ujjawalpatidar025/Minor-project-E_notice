import express from "express";
import {getquery} from '../../controllers/Query/query.js'
const router=express.Router();

router.post("/", getquery);
export default router;