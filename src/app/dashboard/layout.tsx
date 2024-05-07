"use client";
import React, { ReactNode, useEffect } from "react";
import SideBar from "./components/sideBar";
import TopNavBar from "./components/TopNavBar";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) redirect("/onboarding/login");
    }, []);
    return (
        <Provider store={store}>
            <main className="min-h-screen overflow-y-auto bg-[#F9FAFB] flex">
                <div className="flex">
                    <aside className="lg:inline-block h-full hidden  md:w-[16rem] p-[1rem]  bg-white">
                        <SideBar />
                    </aside>
                    <div className="h-fulll w-[0.3rem] bg-border" />
                </div>
                <section className="space-y-1 flex flex-col w-full min-h-screen">
                    <div>
                        <nav className="bg-white flex items-center h-14 w-full">
                            <TopNavBar />
                        </nav>
                        <div className="w-fulll h-[0.3rem] bg-border" />
                    </div>
                    <div className="p-4  max-h-screen overflow-y-auto h-full w-full bg-dashboard">
                        {children}
                    </div>
                </section>
            </main>
        </Provider>
    );
};
export default Layout;
