import jwt from "jsonwebtoken"
import { createError } from "./error.js";

export const verifyToken=(req, res, next)=>{
    const token=req.cookies.access_token;
    if(!token) next(createError(401, "You are not authenticated!")),res.send({loggedIn:false});
    
    jwt.verify(token, process.env.JWTTOKENKEY, (err, user)=>{
        if(err){ next(createError(403, "Invalid Token!")), console.log("invalid token"), res.send({loggedIn:false});}
        req.user=user;
        req.token=token;
        res.send({loggedIn:true})
        console.log(req.token);
        next();
    })
}