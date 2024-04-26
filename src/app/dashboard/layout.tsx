import React, { ReactNode } from "react";
import SideBar from "./components/sideBar";
import TopNavBar from "./components/TopNavBar";

export const metadata = {
    title: "dasboard",
};

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="h-screen bg-[#F9FAFB] flex">
            <div className="h-full flex">
                <aside className="md:inline-block h-full hidden w-[16rem] p-[1rem]  bg-white">
                    <SideBar />
                </aside>
                <div className="h-fulll w-[0.3rem] bg-border"></div>
            </div>
            <section className="space-y-1 flex flex-col w-full min-h-screen">
                <div>
                    <nav className="bg-white flex items-center h-14 w-full"><TopNavBar/></nav>
                    <div className="w-fulll h-[0.3rem] bg-border"></div>
                </div>
                <div className="p-4  h-full w-full bg-dashboard">
                    {children}
                </div>
            </section>
        </main>
    );
};

export default layout;
