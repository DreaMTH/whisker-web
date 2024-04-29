import styles from "./Header.module.css";
import React from "react";

export default function Header(): React.ReactNode {
    return (
        <>
            <nav className={styles.rootNav}>
                <li>Home</li>
                <li>News</li>
                <li>Profile</li>
                <li>Messages</li>
                <li>Log in</li>
                <li>Log out</li>
            </nav>
        </>
    );
}