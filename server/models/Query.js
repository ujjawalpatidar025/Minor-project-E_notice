import mongoose from "mongoose";
import { Schema } from "mongoose";

const QuerySchema = new Schema({
    
    query:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    querySolution:[
        {
            solution:{
            type:String
            },
            date:{
                type: Date,
                default: Date.now()
            }

        }
    ]
}, {timestamps: true});

export const Query = mongoose.model("queries", QuerySchema);