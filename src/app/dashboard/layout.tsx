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
            <main className="min-h-screen overflow-y-hidden bg-[#F9FAFB] flex">
                <AnimatePresence>
                    {openNavBar && <MobileSideBar setOpen={setOpenNavBar} />}
                </AnimatePresence>
                {/* <MobileSideBar /> */}
                <div className="flex">
                    <aside className="lg:inline-block h-full hidden  md:w-[16rem] p-[1rem]  bg-white">
                        <SideBar />
                    </aside>
                    <div className="h-fulll w-[0.3rem] bg-border" />
                </div>
                <section className="flex flex-col w-full min-h-screen">
                    <div>
                        <nav className="bg-white flex items-center h-14 w-full sticky top-0">
                            <TopNavBar setOpen={setOpenNavBar} />
                        </nav>
                        <div className="w-fulll h-[0.3rem] bg-border" />
                    </div>
                    <main className="max-h-screen overflow-y-hidden h-full w-full bg-dashboard">
                        {children}
                    </main>
                </section>
            </main>
        </Provider>
    );
};
export default Layout;
