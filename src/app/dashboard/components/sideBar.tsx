"use client";
import Image from "next/image";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

import React, { useState } from "react";
import SideNav from "./SideNav";
const SideBar = () => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className="full">
            <Link href={"/"}>
                <Image src={"Logo.svg"} alt="" width={110} height={100} />
            </Link>
            <div
                onClick={(e) => {
                    e.stopPropagation();
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
                            <h1 className="font-semibold text-sm">Apps</h1>
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
            <div>
                
                <SideNav />
            </div>
        </div>
    );
};

export default SideBar;
