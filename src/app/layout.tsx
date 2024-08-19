import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import QueryProvider from "@/components/QueryProvider";
import CustomToastContainer from "./dashboard/jobs/components/CustomToastContainer";
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
                className={`${moserat.className} max-w-full overflow-x-hidden`}
            >
                <div id="portal" className="lg:hidden"></div>
                <main className="">
                    <QueryProvider>{children}</QueryProvider>
                </main>
                <CustomToastContainer />
            </body>
        </html>
    );
}
