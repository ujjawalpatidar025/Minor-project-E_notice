import express from "express";
import {createmessages} from '../../controllers/Messages/messages.js'
const router=express.Router();

router.post("/", createmessages);
export default router;