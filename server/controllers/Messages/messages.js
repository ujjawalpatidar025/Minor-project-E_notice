import { createError } from "../../error.js";
import { Message } from "../../models/Message.js";



export const createmessages = async (req, res, next)=>{
    try{
       const {institute, category, batchYear, heading, subHeading, message}=req.body;
       if(!institute || !category || !batchYear || !heading || !subHeading || !message) next(createError(404, "Please fill all the necessary details!"));
       
       const newMessage=new Message({...req.body});
       const savedMessage = await newMessage.save();
       res.status(200).json(savedMessage);
    }catch(error){
        next(error);
    }
}

export const getmessages = async(req, res, next)=>{
    try{
       if(req.params.institute==="ALL"){
        const allMessages= await Message.find();
        res.status(200).json(allMessages);
       }else{
        const allMessages= await Message.find({institute: req.params.institute});
        res.status(200).json(allMessages);
       }
    }catch(error){
        next(error);
    }
}