"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { TabMode } from "./TabContainer";
import ActiveTab from "./ActiveTab";
import { useSearchParams } from "next/navigation";
import InactiveTab from "./InactiveTab";
import { AnimatePresence } from "framer-motion";
import Draft from "./Draft";
import { useStoreContext } from "./JobContextapi/store";
const Tab = () => {
    const mode = useSearchParams().get("tab") ?? ("Active" as TabMode);
    const data = useSelector((state: any) => state.jobList)[mode];
    const { direction } = useStoreContext();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-x-hidden"
        >
            <AnimatePresence mode="wait">
                {mode === "Active" && (
                    <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            x: -1000,
                            transition: { ease: "easeInOut", type: "" },
                        }}
                    >
                        <ActiveTab data={data} />
                    </motion.div>
                )}
                {mode === "Inactive" && (
                    <motion.div
                        key="inactive"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            x: direction === "r" ? -1000 : 1000,
                            opacity: 0,
                            transition: { ease: "easeInOut" },
                        }}
                    >
                        <InactiveTab data={data} />
                    </motion.div>
                )}
                {mode === "Draft" && (
                    <motion.div
                        key="draft"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            x: direction === "r" ? -1000 : 1000,
                            opacity: 0,
                            transition: { ease: "easeInOut" },
                        }}
                    >
                        <Draft />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Tab;
