"use client";
import DropDown, { DropDownChild } from "@/components/DropDownMenu/DropDown";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { handleDeletePath } from "../lib/deleteJob.action";

export function JobListCardMore({ id }: { id: string }) {
    const [token, setToken] = useState<null | string>(null);
    useEffect(() => {
        setToken((_) => localStorage.getItem("token"));
    }, []);

    console.log(id);
    const { push } = useRouter();
    const [open, setOpen] = useState(false);
    const [openSmallDropDown, setOpenSmallDropDown] = useState(false);

    return (
        <div
            onClick={() => setOpen(true)}
            className="relative w-8 h-8"
            onBlur={(e) => {
                e.stopPropagation();
                setOpen(false);
            }}
            tabIndex={-1}
        >
            <div className="rotate-90 right-0 absolute   hover:text-black tracking-wider font-semibold  text-slate-600/70 cursor-pointer select-none">
                ...
            </div>
            {open && (
                <DropDown className="min-w-[12rem] shadow-gray-400/65 absolute">
                    <DropDownChild svg link="" name="View Job" />
                    <DropDownChild svg link="" name="Edit Job" />
                    <div className="flex selection:bg-none flex-col items-center cursor-pointer px-2 bg-white">
                        <div
                            className="flex w-full justify-between pt-2"
                            onClick={() => {
                                setOpenSmallDropDown((prev) => !prev);
                            }}
                        >
                            <span className="text-xs text-slate-500">
                                Share Job
                            </span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                color="#344054"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "rgb(52, 64, 84)" }}
                            >
                                <polyline
                                    fill="none"
                                    stroke-width="2"
                                    points="18 9 12 15 6 9"
                                ></polyline>
                            </svg>
                        </div>
                        {openSmallDropDown && (
                            <div className="w-full text-xs">
                                <div
                                    onClick={() => {
                                        push("https://www.linkedin.com");
                                    }}
                                    className="px-3 p-2  hover:bg-[#1a73e8] hover:text-white cursor-pointer"
                                >
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 1024 1024"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                color: "rgb(102, 112, 133)",
                                            }}
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                                        </svg>
                                        <span>LinkedIn</span>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        push("https://www.twitter.com");
                                    }}
                                    className="p-2 px-3 justify-center hover:bg-[#1a73e8] hover:text-white cursor-pointer"
                                >
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 1024 1024"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                color: "rgb(102, 112, 133)",
                                                margin: "0px 5px;",
                                            }}
                                        >
                                            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                        </svg>
                                        <span>Twitter</span>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        push("https://www.twitter.com");
                                    }}
                                    className="p-2 px-3 hover:bg-[#1a73e8] hover:text-white cursor-pointer"
                                >
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                color: "rgb(102, 112, 133)",
                                            }}
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                            ></path>
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                                        </svg>
                                        <span>Facebook</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <DropDownChild
                        onClick={() => {
                            handleDeletePath(id, token as string);
                        }}
                        svg
                        link=""
                        className="text-red-500"
                        name="Delete"
                    />
                </DropDown>
            )}
        </div>
    );
}
