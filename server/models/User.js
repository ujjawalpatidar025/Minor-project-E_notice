import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
}, {timestamps: true});

export const User = mongoose.model("users", UserSchema);