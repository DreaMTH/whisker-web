import React from "react";
import { INews } from "@/lib/controllers/PostController";

export default function PostList({data}:Readonly<{data:INews[]}>):React.ReactNode {
    const list = data.map(element => (
        <li key={element.title}>
            {element.title}
        </li>
    ));
    return (
        <ul>
            {list}
        </ul>
    );
}