import express from "express";
import {signout} from '../../controllers/authentication/signout.js'
const router=express.Router();

router.get("/", signout);
export default router;