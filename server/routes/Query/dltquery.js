import express from "express";
import {deleteQuery} from '../../controllers/Query/query.js'
const router=express.Router();

router.post("/", deleteQuery);
export default router;