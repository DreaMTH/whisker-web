"use client";
import React from "react";
import {authUser} from "@/lib/redux/auth";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/lib/redux/store";
import styles from "./registrationForm.module.css";

export const LoginForm = (): React.ReactNode => {
    const dispatch = useDispatch<AppDispatch>();
    const login = async (formData: FormData) => {
        const email = formData.get("email")?.toString() || '';
        const password = formData.get("password")?.toString() || '';
        const loginInfo = {
            email,
            password
        };
        const data: any = await dispatch(authUser(loginInfo));
        if (data.payload.token) {
            window.localStorage.setItem("token", data.payload.token);

        } else {
            alert("Authorization failed");
        }
    }
    return (
        <>
            <form className={styles.container} action={login}>
                <input
                    name="email"
                    required
                    type="email"
                />
                <label htmlFor="email">Email:</label>
                <input
                    name="password"
                    required
                    type="password"
                />
                <label htmlFor="password">Password:</label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}