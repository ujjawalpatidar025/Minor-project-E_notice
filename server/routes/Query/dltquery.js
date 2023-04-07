import express from "express";
import {dltquery} from '../../controllers/Query/query.js'
const router=express.Router();

router.post("/", dltquery);
export default router;