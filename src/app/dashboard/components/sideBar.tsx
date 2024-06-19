"use client";
import Image from "next/image";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SideNav from "./SideNav";
const SideBar = ({ type }: { type?: "sm" | "lg"; close?(): any }) => {
    const [dropDown, setDropDown] = useState(false);
    const [expand, setExpand] = useState(!true);
    const expandClass = expand ? "md:w-[16rem]" : "md:w-[5rem]";
    return (
        <aside
            className={`lg:inline-block h-full ${type === "sm" ? "" : "hidden"}  p-[1rem]  bg-white ${expandClass}`}
        >
            <motion.div
                animate={{
                    x: type == "sm" ? [-200, 0] : 0,
                    transition: { type: "just" },
                }}
                exit={{ x: -270 }}
                className={`${
                    type === "sm"
                        ? "fixed top-0 z-[100000] p-4 md:p-3  bg-white bottom-0 sm:w-[33%]"
                        : "min-w-full"
                }`}
            >
                <Link href={"/dashboard"}>
                    <Image
                        src={expand ? `/Logo.svg` : "/SmallLogo.svg"}
                        alt=""
                        width={expand ? 110 : 35}
                        height={expand ? 100 : 50}
                    />
                </Link>
                {expand && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpand(!false);
                            setDropDown((prev) => !prev);
                        }}
                        className="bg-dashboard w-full space-y-1 cursor-pointer  border mt-12 mb-6 rounded-lg overflow-hidden"
                    >
                        <div className="flex  justify-between space-x-2 bg-white p-4 w-full">
                            <div className="space-x-2 flex items-center">
                                <Image
                                    src={"/dropdown.svg"}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-sm">
                                        Apps
                                    </h1>
                                    <p className="text-xs text-gray-500">
                                        Recruit: Professor
                                    </p>
                                </div>
                            </div>
                            <div className="flex  justify-self-end">
                                <RxCaretDown className="text-2xl" />
                            </div>
                        </div>
                        {dropDown && (
                            <div className="bg-dashboard w-full gap-2 cursor-pointer  border  shadow-md rounded-lg overflow-hidden">
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex  justify-between space-x-2 items-center hover:bg-primary-light-blue bg-white p-3 px-3 w-full"
                                >
                                    <div className="space-x-2 flex  items-center">
                                        <Image
                                            src={"/recuits.svg"}
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                        <div className="space-y-1">
                                            <h1 className="font-semibold text-slate-800 text-sm">
                                                Recuit
                                            </h1>
                                            <p className="text-xs text-gray-500">
                                                ATS, Vetting, etc
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex  justify-self-end">
                                        <IoMdCheckmark className="text-xl" />
                                    </div>
                                </div>

                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex   justify-between space-x-2 hover:bg-primary-light-blue bg-white p-3 px-3 w-full"
                                >
                                    <div className="space-x-2 flex items-center">
                                        <Image
                                            src={"/manage.svg"}
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                        <div className="space-y-1">
                                            <h1 className="font-semibold text-slate-800 text-sm">
                                                Manage
                                            </h1>
                                            <p className="text-xs text-gray-500">
                                                Onboard, Payroll..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div>
                    <SideNav setExpand={setExpand} expand={expand} />
                </div>
            </motion.div>
        </aside>
    );
};

export default SideBar;
