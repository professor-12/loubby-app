"use client";
import React from "react";
import { RxCaretRight } from "react-icons/rx";
import LatestPost from "./LatestPost";
import { useRouter } from "next/navigation";

const LatestPosting = () => {
    const route = useRouter();
    return (
        <div className="white gap-6 flex flex-col min-h-[8rem] bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-2">
            <div className="flex items-center justify-between w-full">
                <p className="font-medium text-clip">Latest Posting</p>
                <p
                    className="text-blue-600 flex items-center text-sm space-x-1 cursor-pointer"
                    onClick={() => {
                        route.push("dashboard/jobs");
                    }}
                >
                    <span>See more</span>{" "}
                    <RxCaretRight className="text-blue-500 text-2xl" />
                </p>
            </div>
            <div className="pb-8 p-3">
                <LatestPost />
            </div>
        </div>
    );
};

export default LatestPosting;
