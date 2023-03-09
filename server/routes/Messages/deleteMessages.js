import express from "express";
import {deletemessages} from '../../controllers/Messages/messages.js'
const router=express.Router();

router.put("/:id", deletemessages);
export default router;