import mongoose from "mongoose";
import { Schema } from "mongoose";

const QuerySchema = new Schema({
    
    query:{
        type: String,
        required: true
    },
    querySolution:[
        {
            solution:{
            type:String
            }

        }
    ]
}, {timestamps: true});

export const Query = mongoose.model("queries", QuerySchema);