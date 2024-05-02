"use server";

import {UserModel} from "@/lib/models/userModel";
import bcrypt from "bcrypt";
import {isValidObjectId} from "mongoose";
import {connectDb} from "@/utils/connect";

export declare interface IUser {
    name: string,
    displayName: string,
    email: string,
    description?: string,
    password: string,
    avatarUrl?: string,

}

export const createUser = async (user: IUser) => {
    try {
        await connectDb();
        const salt = await bcrypt.genSalt(16);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
        const doc = await new UserModel(user);
        console.log("passed");
        await doc.save();
    } catch (err) {
        console.log(err);
    }
}
export const updateDisplayName = async (id: Readonly<string>, newName: Readonly<string>) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Invalid user id");
        }
        const doc = await UserModel.findByIdAndUpdate(id, {
            displayName: newName,
        }, {
            new: true,
        });
        if (!doc) {
            throw new Error("Something went wrong during updating");
        }
        return doc;
    } catch (err: any) {
        console.error(err);
        throw new Error(err.toString());
    }
}