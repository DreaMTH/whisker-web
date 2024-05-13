"use client";
import { INews } from "@/lib/controllers/PostController";
import Link from "next/link";
import React from "react";

export default function Post({data}:Readonly<{data:INews}>):React.ReactNode {
    
    return(
        <li key={data.title}>
            <h2>
                {data.title}
            </h2>
            <h4>
                {data.content}
            </h4>
            <div>
                <p>{data.likes}</p>
                <p>{data.views}</p>
                <Link href={`/users/${data.relatedUser}`}>
                    <p></p>
                </Link>
            </div>
        </li>
    )
}