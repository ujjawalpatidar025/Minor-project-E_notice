import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import signInRoute from "./routes/authentication/signin.js";
import signOutRoute from "./routes/authentication/signout.js";
import createMessages from "./routes/Messages/createMessages.js";
import getMessages from "./routes/Messages/getMessages.js";
import crtquery from './routes/Query/createQuery.js'
import getquery from './routes/Query/getQuery.js'
import crtquerysolution from './routes/Query/createsolution.js'
import delquery from './routes/Query/dltquery.js'
import deleteMessages from './routes/Messages/deleteMessages.js';
import deleteQuery from './routes/Query/deleteQuery.js'
import cookieParser from "cookie-parser";
import cors from 'cors';
import { verifyToken } from "./verifyToken.js";

const app=express();
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));


const MONGO_URL=process.env.MONGO_URL;
const PORT = process.env.PORT || 5001;


// Connection to database
const connection = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to DB!");
    }).catch((err)=>{
        console.log(`Error Not connected! ${err}`);
    })
}


//Routes for app
app.use(cookieParser());
app.use(express.json()); 
app.use("/signin", signInRoute);
app.use("/signout", signOutRoute);
app.use('/crtMessages', createMessages);
app.use('/getMessages', getMessages);
app.use('/crtquery', crtquery);
app.use('/getquery', getquery);
app.use('/delquery', deleteQuery);
app.use('/crtquerysolution', crtquerysolution);
app.use('/delquery',delquery);
app.use('/delMessages', deleteMessages);
app.get("/verifyToken", verifyToken);




//middleware for handling error
app.use((err, req, res, next)=>{
   const status=err.status || "500";
   const message=err.message || "Something went wrong";
   return res.status(status).json({
    succcess:false,
    status,
    message
   })
})

// Connection to server on Port
app.listen(PORT, ()=>{
    connection();
    console.log("connected to Server!");
})