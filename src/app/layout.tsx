import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
                <main>{children}</main>
                <Toaster
                    position="top-right"
                    toastOptions={{ duration: 4000 }}
                />
            </body>
        </html>
    );
}
