"use client";
import React, {useState} from "react";
import {IUser, createUser} from "@/lib/controllers/UserController";
import {usePathname} from "next/navigation";
import {revalidatePath} from "next/cache";
import styles from "./registrationForm.module.css";
import {useRouter} from "next/navigation";

export const RegistrationForm = () => {
    const path = usePathname();
    const router = useRouter();
    const userRegistration = async (formData: FormData) => {
        console.log("Action terminated");
        if (formData.get("password") !== formData.get("confirmPassword")) {
            return null;
        }
        const user: IUser = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            displayName: formData.get("displayName") as string,
            password: formData.get("password") as string,
        }
        console.log(user);
        await createUser(user);
        router.push('/');
    }
    return (
        <form className={styles.container} action={userRegistration}>
            <input
                name="email"
                required
                type="email"
            />
            <label htmlFor="email">Email:</label>
            <input
                name="name"
                required
                type="text"
            />
            <label htmlFor="name">Name:</label>
            <input
                name="displayName"
                required
                type="text"
            />
            <label htmlFor="displayName">Display name:</label>
            <input
                name="password"
                required
                type="password"
            />
            <label htmlFor="password">Password:</label>
            <input
                name="confirmPassword"
                required
                type="password"
            />
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input type="submit" value="Submit"/>
        </form>
    );
}
