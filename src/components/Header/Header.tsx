import styles from "./Header.module.css";
import React from "react";

export default function Header(): React.ReactNode {
    return (
        <>
            <nav className={styles.rootNav}>
                <div>
                    <li>Home</li>
                    <li>News</li>
                    <li>Profile</li>
                    <li>Messages</li>
                </div>
                <div>
                    <li>Log in</li>
                    <li>Sign up</li>
                    <li>Log out</li>
                </div>
            </nav>
        </>
    );
}