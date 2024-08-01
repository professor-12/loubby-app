"use client";
import { JobDetailTabs } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const TabNav = () => {
    const tab = useSearchParams().get("tab") ?? "Job Details";
    const { push } = useRouter();
    const handleChangeTab = (name: string) => {
        push("?tab=" + name);
    };
    return (
        <div className="flex justify-self-end gap-3 pt-3">
            {JobDetailTabs.map(({ name, svg }, indx) => {
                return (
                    <div
                        onClick={() => {
                            handleChangeTab(name);
                            console.log("asdf");
                        }}
                        className="py-2 selection:bg-none relative cursor-pointer space-y-2"
                        key={name}
                    >
                        <div
                            key={indx}
                            className="text-sm font-light text-[#667085] flex gap-2 px-4"
                        >
                            {svg}
                            {name}
                        </div>
                        <AnimatePresence>
                            {tab === name && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "105%" }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-[105%] absolute rounded  bg-blue-600 h-[2.3px] "
                                />
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default TabNav;
