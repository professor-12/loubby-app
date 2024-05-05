"use client";
import React, { ReactNode } from "react";
import SideBar from "./components/sideBar";
import TopNavBar from "./components/TopNavBar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <main className="h-screen bg-[#F9FAFB] flex">
                <div className="h-full flex">
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
                    <div className="p-4  h-full w-full bg-dashboard">
                        {children}
                    </div>
                </section>
            </main>
        </Provider>
    );
};

export default layout;
