import express from "express";
import {getquery, getSpecificQuery} from '../../controllers/Query/query.js'
const router=express.Router();

router.get("/", getquery);
router.get("/:id", getSpecificQuery)
export default router;