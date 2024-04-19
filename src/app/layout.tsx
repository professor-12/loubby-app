import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const moserat = Montserrat({ subsets: ["latin"], weight: ["500"] });

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
            </body>
        </html>
    );
}
