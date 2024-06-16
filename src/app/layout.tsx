import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import QueryProvider from "@/components/QueryProvider";

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
            <body
                className={`overflow-hidden ${moserat.className} overflow-x-hidden`}
            >
                <div id="portal" className="lg:hidden"></div>
                <main>
                    <QueryProvider>{children}</QueryProvider>
                </main>
                <ToastContainer />
            </body>
        </html>
    );
}
