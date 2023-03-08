import express from "express";
import {getmessages} from '../../controllers/Messages/messages.js'
const router=express.Router();

router.get("/:institute", getmessages);
export default router;