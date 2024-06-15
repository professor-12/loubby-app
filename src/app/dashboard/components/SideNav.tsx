"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { navLinks } from "@/lib/constants/BaseURL";

const SideNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="space-y-4 ">
            <div>
                <div className="my-5 space-y-2">
                    <h1 className="text-xs  text-p-muted">General</h1>
                    <ul className="">
                        {navLinks[0].links.map((link: any) => (
                            <NavLink
                                key={link.link}
                                svg={link.img}
                                name={link.name}
                                link={link.link}
                            />
                        ))}
                    </ul>
                    <div className="p-3 space-y-3 cursor-pointer px-5 hover:bg-active">
                        <div
                            onClick={() => setOpen((prev) => !prev)}
                            className={` rounded-md flex space-x-4 items-center`}
                        >
                            <span className="">
                                <Image
                                    src={"/threedot.svg"}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </span>
                            <p className={`text-[0.85rem] text-slate-600`}>
                                More
                            </p>
                        </div>
                        {open && (
                            <div className="px-3 space-y-1">
                                <div className="cursor-pointer py-2  hover:bg-active">
                                    <div
                                        className={` rounded-md flex space-x-4 items-center`}
                                    >
                                        <span className="">
                                            <Image
                                                src={"/pool.svg"}
                                                width={20}
                                                height={20}
                                                alt=""
                                            />
                                        </span>
                                        <p
                                            className={`text-[0.85rem] text-slate-600`}
                                        >
                                            More
                                        </p>
                                    </div>
                                </div>
                                <div className="cursor-pointer py-2  hover:bg-active">
                                    <div
                                        className={` rounded-md flex space-x-4 items-center`}
                                    >
                                        <span className="">
                                            <Image
                                                src={"/insights.svg"}
                                                width={20}
                                                height={20}
                                                alt=""
                                            />
                                        </span>
                                        <p
                                            className={`text-[0.85rem] text-slate-600`}
                                        >
                                            Insights
                                        </p>
                                    </div>
                                </div>
                                <div className="cursor-pointer py-2  hover:bg-active">
                                    <div
                                        className={` rounded-md flex space-x-4 items-center`}
                                    >
                                        <span className="">
                                            <Image
                                                src={"/saved.svg"}
                                                width={20}
                                                height={20}
                                                alt=""
                                            />
                                        </span>
                                        <p
                                            className={`text-[0.85rem] text-slate-600`}
                                        >
                                            Saved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="my-5 space-y-2">
                    <h1 className="text-xs  text-p-muted">Support</h1>
                    <ul className="">
                        {navLinks[1].links.map((link: any) => (
                            <NavLink
                                key={link.link}
                                svg={link.img}
                                name={link.name}
                                link={link.link}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SideNav;
