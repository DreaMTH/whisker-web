import {UserModel} from "@/lib/models/userModel";
import * as var_userland from "VAR_USERLAND";

interface IUser {
    name: string,
    displayName: string,
    email: string,
    description?: string,
    password: string,
    avatarUrl?: string,

}

export const createUser = (user: Readonly<IUser>) => {
    try {
        const doc = new UserModel(user);
        doc.save().then(res => {
            console.log(res);
            return res;
        }).catch(err => console.log(err));
    } catch (err) {
        console.log(err);
    }
}
export const updateDisplayName = (id:Readonly<string>, newName:Readonly<string>) => {

}