"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { TabMode } from "./TabContainer";
const Tab = ({ mode }: { mode: TabMode}) => {
    const data = useSelector((state: any) => state.jobList);
    console.log(data[mode]);
    return (
        <motion.div className="" exit={{}} animate={{}}>
            Tab
        </motion.div>
    );
};

export default Tab;
