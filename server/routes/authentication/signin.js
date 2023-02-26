import express from "express";
import {signin} from '../../controllers/authentication/signin.js'
const router=express.Router();

router.post("/", signin);
export default router;