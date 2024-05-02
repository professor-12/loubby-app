import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const moserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Loubby App",
    description: "Loubby App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${moserat.className}`}>
                <main>
                    {children}
                </main>
                <ToastContainer />
            </body>
        </html>
    );
}
