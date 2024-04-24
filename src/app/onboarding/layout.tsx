import AuthAnimationDisplay from "@/components/AuthAnimationDisplay";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen overflow-y-auto lg:grid lg:grid-cols-12  mx-auto bg-background-gray">
            <div className="lg:flex lg:min-h-screen flex-col p-6  bg-slate-gray col-span-8 ">
                <Link href={"/"}>
                    <Image
                        src={"/Logo.svg"}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="hidden lg:block">
                    <AuthAnimationDisplay />
                </div>
            </div>
            <main className="lg:bg-white  justify-center lg:items-center  md:pt-0 flex flex-1 col-span-4  min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default Layout;
