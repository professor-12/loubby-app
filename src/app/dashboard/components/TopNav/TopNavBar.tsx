"use client";
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";
import HeaderButton from "./HeaderButton";
import ProfileOptionMenu from "./ProfileOptionMenu";
import { motion } from "framer-motion";

const TopNavBar = ({ setOpen }: { setOpen: any }) => {
    return (
        <div className="flex w-full px-4 justify-between items-center">
            <div
                onClick={() => setOpen(!false)}
                className="cursor-pointer mr-2 lg:hidden"
            >
                <Image
                    src="/Menu.svg"
                    width={35}
                    height={30}
                    alt="Menu Button"
                />
            </div>
            <Search className="border" />
            <div className="space-x-3 items-center flex">
                <div className="flex space-x-5">
                    <button className="text-nowrap hidden lg:flex font-medium   rounded-lg p-2 text-sm px-3  text-center  text-white  bg-gradient-animate">
                        Refer a Company
                    </button>
                    <HeaderButton />
                </div>
                <ProfileOptionMenu /> {/*TODO Do not forget */}
                <div className="relative">
                    <Image
                        src={"/Notification.svg"}
                        width={20}
                        height={20}
                        alt="notification"
                    />
                    <span className="absolute bottom-2 left-[.37rem] bg-red-700 text-white flex items-center justify-center text-center h-4 w-4 rounded-full text-xs font-semibold">
                        1
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;
