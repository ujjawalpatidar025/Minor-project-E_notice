import { User } from "../../models/User.js";
import { createError } from "../../error.js";
import  jwt from "jsonwebtoken";

export const signin= async (req, res, next)=>{
    
    try{
      
       const {email, password} = req.body;
       if(!email || !password) return  next(createError(402, "Please fill all the necessary details!"));

       const user=await User.findOne({email});
       if(!user) return  next(createError(404, "Invalid Credentials!"));
       else{
         const isCorrectPassword = (password===user.password)? 1 : 0;
         if (!isCorrectPassword) return next(createError(404, "Invalid Credentials!"));
         else{
           const {password, ...others}=user._doc;
           const token = jwt.sign({ id: user._id }, process.env.JWTTOKENKEY);
           res
             .cookie("access_token", token, {
               httpOnly: true,
             })
             .status(200)
             .json({
              success: true,
              message:"Login Successfully.",
              others
            });
         }
       }

    }catch(err){
        next(err);
    };
}



export const  signout= async (req, res, next)=>{
      res.clearCookie('access_token')
      res.json({
        success:true,
        message:"Logout Successfully.",
      });
}

export const isAuthenticated=async(req, res, next)=>{
  try{
    
    const userdata=await User.findById(req.user.id);

    res.status(200).json({
      success:true,
      message:"You are Authenticated",
      userdata
    })
  }catch(error){
    next(error);
  }
}