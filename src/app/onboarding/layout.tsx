import AuthAnimationDisplay from "@/components/AuthAnimationDisplay";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex container mx-auto px-2 bg-background-gray">
            <div className="hidden lg:flex">
                <div></div>
                <AuthAnimationDisplay />
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
