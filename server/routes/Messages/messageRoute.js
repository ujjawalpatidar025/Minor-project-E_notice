import express from "express";
import {createmessages, deletemessages, getmessages} from '../../controllers/Messages/messages.js'
const router=express.Router();

router.post("/crtMessages", createmessages);
router.put("/delMessages/:id", deletemessages);
router.get("/getMessages", getmessages);
export default router;