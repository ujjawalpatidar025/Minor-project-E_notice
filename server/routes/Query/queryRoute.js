import express from "express";
import {createquery, createquerysolution, deleteQuery, getquery,getSpecificQuery} from '../../controllers/Query/query.js'
const router=express.Router();

router.get("/", getquery);
router.get("/:id", getSpecificQuery);
router.post("/crtQuery", createquery);
router.put("/delQuery/:id", deleteQuery);
router.post("/crtQuerySolution/:id", createquerysolution);

export default router;