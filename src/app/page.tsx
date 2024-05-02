"use client";
import {ReactNode, useEffect, useState} from "react";
import {useAppSelector} from "@/lib/redux/store";

export default function Home(): ReactNode {
    const [user, setUser] = useState<string>('');
    const displayName = useAppSelector(state => state.authReducer.user?.displayName);
    useEffect(() => {
        setUser(displayName || '');
    }, [displayName])
    return (
        <>
            <h1>
                {user}
            </h1>
            <ul>
                <li><p>...</p></li>
            </ul>

            <></>
        </>
    );
}
