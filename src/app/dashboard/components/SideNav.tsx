"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const navLinks = [
    {
        name: "General",
        links: [
            {
                link: "/dashboard",
                img: "/dashboard.svg",
                color: "",
                name: "Dashboard",
            },
            {
                link: "/dashboard/jobs",
                img: "/job.svg",
                color: "",
                name: "Jobs",
            },
            {
                link: "/dashboard/conversations",
                img: "/conversations.svg",
                color: "",
                name: "Conversations",
            },
            {
                link: "/dashboard/onversations",
                img: "/search.svg",
                color: "",
                name: "Talent Marketplace",
            },
            {
                link: "/dashboard/nversations",
                img: "/pipe.svg",
                color: "",
                name: "Pipeline",
            },
            {
                link: "/dashboard/assessment",
                img: "/clock.svg",
                color: "",
                name: "Assesment",
            },
            {
                link: "/dashboard/schedule",
                img: "/schedule.svg",
                color: "",
                name: "Schedule",
            },
        ],
    },
    {
        name: "Support",
        links: [
            {
                link: "/dashboard/settings",
                img: "/settings.svg",
                color: "",
                name: "Settings",
            },
            {
                link: "/dashboard/feedback",
                img: "/feedback.svg",
                color: "",
                name: "Feedback",
            },
        ],
    },
];

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
