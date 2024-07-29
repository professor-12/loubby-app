"use client";

import Image from "next/image";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SideNav from "./SideNav";

type SideBarProps = {
    type?: "sm" | "lg";
    close?: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ type = "lg", close }) => {
    const [dropDown, setDropDown] = useState(false);
    const [expand, setExpand] = useState(true);

    const expandClass = expand ? "md:w-[16rem]" : "md:w-[5rem]";
    const show =
        type === "sm"
            ? "fixed top-0 z-[100000] overflow-y-auto p-4 md:p-3 bg-white bottom-0"
            : "hidden p-[1rem]";

    return (
        <motion.aside
            animate={{
                x: type === "sm" ? [-200, 0] : 0,
                transition: { type: "just" },
            }}
            exit={{ x: -270 }}
            className={`lg:inline-block ${show} overflow-hidden bg-white ${expandClass}`}
        >
            <div className="min-h-full">
                <Link href="/dashboard">
                    <Image
                        src={expand ? "/Logo.svg" : "/SmallLogo.svg"}
                        alt="Logo"
                        width={expand ? 110 : 35}
                        height={expand ? 100 : 50}
                    />
                </Link>

                {expand && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpand(!expand);
                            setDropDown((prev) => !prev);
                        }}
                        className="bg-dashboard w-full space-y-1 cursor-pointer border mt-12 mb-6 rounded-lg overflow-hidden"
                    >
                        <div className="flex justify-between space-x-2 bg-white p-4 w-full">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/dropdown.svg"
                                    alt="Dropdown Icon"
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
                            <RxCaretDown className="text-2xl" />
                        </div>

                        {dropDown && (
                            <div className="bg-dashboard w-full gap-2 cursor-pointer border shadow-md rounded-lg overflow-hidden">
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex justify-between space-x-2 items-center hover:bg-primary-light-blue bg-white p-3 w-full"
                                >
                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src="/recuits.svg"
                                            alt="Recuit Icon"
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
                                    <IoMdCheckmark className="text-xl" />
                                </div>

                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex justify-between space-x-2 hover:bg-primary-light-blue bg-white p-3 w-full"
                                >
                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src="/manage.svg"
                                            alt="Manage Icon"
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

                <div className="h-full pb-8">
                    <SideNav setExpand={setExpand} expand={expand} />
                </div>
            </div>
        </motion.aside>
    );
};

export default SideBar;
