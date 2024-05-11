"use client"
import styles from "./Header.module.css";
import React from "react";
import {NavbarItem} from "@/components/Header/NavbarItems";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useAppSelector} from "@/lib/redux/store";
import {isAuth} from "@/lib/redux/auth";
import {useSelector} from "react-redux";

export const Header = ({links}: Readonly<{ links: NavbarItem[] }>): React.ReactNode => {
    const authPassed = useSelector(isAuth);
    const path = usePathname();
    let linksForAuth:NavbarItem[];
    if(authPassed) {
        linksForAuth = links.filter((element) => element.forAuth);
    } else {
        linksForAuth = links;
    }
    return (
        <>
            <nav className={styles.rootNav}>
                {linksForAuth.map(link => <Link className={`${styles.link} ${path === link.path && styles.active}`}
                                         key={link.title} href={link.path}>{link.title}</Link>)}
            </nav>
        </>
    );
}