import React from "react";
import {displayDate} from "@/utils/date";

export const Footer = (): React.ReactNode => {
    return (
        <>
            <h3>{displayDate(new Date())}</h3>
        </>
    );
}