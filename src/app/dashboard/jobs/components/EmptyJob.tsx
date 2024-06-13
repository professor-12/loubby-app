"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/onboarding/create-account/Button";
import { motion } from "framer-motion";
import { useStoreContext } from "./JobContextapi/store";
const EmptyJob = ({ title, message }: { title: string; message: string }) => {
    const { direction } = useStoreContext();
    return (
        <motion.div
            className="mx-auto h-[60vh]  my-auto flex flex-col items-center justify-center"
            initial={{ x: direction === "r" ? 1000 : -500 }}
            animate={{ x: 0, transition: { ease: "easeInOut" } }}
        >
            <Image
                src="/latestpost.svg"
                width={170}
                height={200}
                alt="No Jobs Image"
            />
            <div className="text-center text-sm space-y-1">
                <h1 className="font-semibold text-nowrap">{title}</h1>
                <p className="text-small-p-mute text-xs lg:text-xs max-w-[80%] mx-auto">
                    {message}
                </p>
            </div>
            <Button
                className="bg-blue-600 mt-3 rounded-md p-1 px-4 space-x-2 text-white cursor-pointer"
                link="/dashboard/jobs/joblisting"
            >
                <span className="text-md">+</span>
                <span className="text-sm">Create New</span>
            </Button>
        </motion.div>
    );
};

export default EmptyJob;
