"use client"
import styles from "./Header.module.css";
import React from "react";
import {NavbarItem} from "@/components/Header/NavbarItems";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Header = ({links}: Readonly<{ links: NavbarItem[] }>): React.ReactNode => {
    const path = usePathname();
    console.log(path);
    return (
        <>
            <nav className={styles.rootNav}>
                {links.map(link => <Link className={`${styles.link} ${path === link.path && styles.active}`}
                                         key={link.title} href={link.path}>{link.title}</Link>)}
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