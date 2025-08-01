import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "José Hernanes - Backend Developer",
    description: "Portfolio pessoal de José Hernanes, desenvolvedor back-end e entusiasta de tecnologia.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className="scroll-smooth">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
