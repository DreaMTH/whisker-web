import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        displayName:{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
        ,
        avatar: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    });
export const UserModel = mongoose.model('User', UserSchema);