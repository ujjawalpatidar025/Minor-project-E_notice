import { createError } from "../../error.js";
import { Message } from "../../models/Message.js";
import { User } from "../../models/User.js";



export const createmessages = async (req, res, next)=>{
    try{
       const user=await User.findById(req.user.id);
       if(!user.admin) return next(createError(401, "You are not authorized to create messages!"));

       const {institute, category, batchYear, heading, subHeading, message}=req.body;
       if(!institute || !category || !batchYear || !heading || !subHeading || !message) next(createError(404, "Please fill all the necessary details!"));
       
       const newMessage=new Message({...req.body});
       await newMessage.save();
       res.status(200).json({
        success: true,
        message:"Message Created Successfully."
       });
    }catch(error){
        next(error);
    }
}

export const getmessages = async(req, res, next)=>{

    try{
        const allMessages= await Message.find({});
        if(!allMessages) return next(createError(404, "There is no notices"));
        res.status(200).json({
            success:true,
            message:"",
            allMessages
        });
    }catch(error){
        next(error);
    }
    // try{
    //    if(req.params.institute==="ALL"){
    //     const allMessages= await Message.find().sort({updatedAt:-1});
    //     res.status(200).json(allMessages);
    //    }else{
    //     const allMessages= await Message.find({institute: req.params.institute}).sort({updatedAt:-1});
    //     res.status(200).json(allMessages);
    //    }
    // }catch(error){
    //     next(error);
    // }
}

export const deletemessages = async(req, res, next)=>{
    try{
       const user=await User.findById(req.user.id);
       if(!user.admin) return next(createError(401, "You are not authorized to delete messages!"));
       const delId=req.params.id;
       await Message.findByIdAndDelete(delId);
       res.status(200).json({
        success:true,
        message:"Message Deleted successfully."
       });

    }catch(error){
        next(error);
    }
}