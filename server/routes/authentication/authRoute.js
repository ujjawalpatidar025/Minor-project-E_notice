import express from "express";
import {isAuthenticated, signin, signout} from '../../controllers/authentication/auth.js'
import { verifyToken } from "../../verifyToken.js";

const router=express.Router();

router.post("/signin", signin);
router.put("/signout", verifyToken, signout);
router.get("/isAuthenticated",verifyToken, isAuthenticated );
export default router;