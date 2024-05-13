"use client";
import {ReactNode, useEffect, useState} from "react";
import {useAppSelector} from "@/lib/redux/store";
import { INews } from "@/lib/controllers/PostController";

export default function Home(): ReactNode {
    const [user, setUser] = useState<string>('');
    const [posts, setPosts] = useState<INews[]>([]);
    const displayName = useAppSelector(state => state.authReducer.user?.displayName);
    const getAllPosts = async() => {
        await fetch("/api/posts")
            .then((res) => {
                if(!res.ok){
                    return null;
                }
                res.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }  
    useEffect(() => {
        setUser(displayName || '');
    }, [displayName])
    useEffect(() => {
        getAllPosts()
        .then((data:any) => {
            setPosts(data);
        })
    }, []);
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
