"use client";
import React, { ReactNode, useEffect, useState } from "react";
import SideBar from "./components/sideBar";
import TopNavBar from "./components/TopNav/TopNavBar";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { redirect } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { MobileSideBar } from "@/components/dynamicImports";

const Layout = ({ children }: { children: ReactNode }) => {
    const [openNavBar, setOpenNavBar] = useState(!true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) redirect("/onboarding/login");
    }, []);
    return (
        <Provider store={store}>
            <main className="max-h-screen overflow-y-auto bg-[#F9FAFB] flex">
                <div>
                    <AnimatePresence>
                        {openNavBar && (
                            <MobileSideBar setOpen={setOpenNavBar} />
                        )}
                    </AnimatePresence>
                    <div className="flex min-h-screen">
                        <SideBar />
                        <div className="h-fulll w-[0.3rem] bg-border" />
                    </div>
                </div>
                <section className="flex flex-col w-full h-screen">
                    <div>
                        <nav className="bg-white flex items-center h-14 w-full sticky top-0">
                            <TopNavBar setOpen={setOpenNavBar} />
                        </nav>
                        <div className="w-fulll h-[0.3rem] bg-border" />
                    </div>
                    <main className="max-h-screen overflow-y-hidden h-full w-full">
                        {children}
                    </main>
                </section>
            </main>
        </Provider>
    );
};
export default Layout;
