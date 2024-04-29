import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter: NextFont = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Whisker Web",
    description: "Simple social media",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
