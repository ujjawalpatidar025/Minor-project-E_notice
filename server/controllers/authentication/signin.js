import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../../error.js";
import  jwt from "jsonwebtoken";

export const signin= async (req, res, next)=>{
    
    try{
       const {email, password} = req.body;
       if(!email || !password) next(createError(404, "Please fill all the necessary details!"));

       const user=await User.findOne({email});
       
       if(!user) next(createError(404, "Invalid Credentials!"));
       else{
         const isCorrectPassword = (password===user.password)? 1 : 0;
         if (!isCorrectPassword) next(createError(404, "Invalid Credentials!"));
         else{
           const {password, ...others}=user._doc;
           const token = jwt.sign({ id: user._id }, process.env.JWTTOKENKEY);
           res
             .cookie("access_token", token, {
               httpOnly: true,
             })
             .status(200)
             .json(others);
         }
       }

    }catch(err){
        next(err);
    };
}