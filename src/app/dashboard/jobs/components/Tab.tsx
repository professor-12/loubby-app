"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { TabMode } from "./TabContainer";
import ActiveTab from "./ActiveTab";
import { useSearchParams } from "next/navigation";
import InactiveTab from "./InactiveTab";
const Tab = () => {
    const mode = useSearchParams().get("tab") ?? ("Active" as TabMode);
    const data = useSelector((state: any) => state.jobList)[mode];
  
    return (
        <motion.div className="" exit={{}} animate={{}}>
            {mode === "Active" && <ActiveTab data={data} />}
            {mode === "Inactive" && <InactiveTab data={data} />}
        </motion.div>
    );
};

export default Tab;
