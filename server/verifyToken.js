import jwt from "jsonwebtoken"
import { createError } from "./error.js";

export const verifyToken=(req, res, next)=>{
    const token=req.cookies.access_token;
    if(!token) next(createError(401, "You are not authenticated!")),res.send({loggedIn:false});
    
    jwt.verify(token, process.env.JWTTOKENKEY, (err, user)=>{
        if(err){ next(createError(403, "Invalid Token!")), res.send({loggedIn:false});}
        req.user=user;
        res.send({loggedIn:true})
        req.token=token
        next();
    })
}