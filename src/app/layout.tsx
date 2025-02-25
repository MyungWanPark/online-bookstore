import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SWRConfigContext from "./context/SWRConfigContext";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Online-BookStore",
    description: "made by MyungWan",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main>
                    <SWRConfigContext>{children}</SWRConfigContext>
                </main>
            </body>
        </html>
    );
}
