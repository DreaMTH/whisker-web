import type {Metadata} from "next";
import {Fira_Code} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";
import {Header, Footer} from "@/components";
import {NavbarItems} from "@/components/Header/NavbarItems";
import {store} from "@/lib/redux/store";
import {Provider} from "react-redux";
import {ReduxProvider} from "@/lib/redux/Provider";

const font: NextFont = Fira_Code({subsets: ["latin"], weight: '600'});

export const metadata: Metadata = {
    title: "Whisker Web",
    description: "Simple social media",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ReduxProvider>
            <Header links={NavbarItems}/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </ReduxProvider>
        </body>
        </html>
    );
}
