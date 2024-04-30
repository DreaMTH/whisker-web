import styles from "./Header.module.css";
import React from "react";
import {NavbarItem} from "@/components/Header/NavbarItems";
import Link from "next/link";

export default function Header({links}: Readonly<{ links: NavbarItem[] }>): React.ReactNode {
    return (
        <>
            <nav className={styles.rootNav}>
                {links.map(link => <Link key={link.title} href={link.path}>{link.title}</Link>)}
                {/*
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
                */}
            </nav>
        </>
    );
}