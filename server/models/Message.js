import mongoose from "mongoose";
import { Schema } from "mongoose";

const MessageSchema = new Schema({
    institute:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    batchYear:{
        type: String,
        required: true,
    },
    heading:{
        type: String,
        required:true
    },
    subHeading:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, {timestamps: true});

export const Message = mongoose.model("messages", MessageSchema);