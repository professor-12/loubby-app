"use client";
import React from "react";
import JobListCard from "./JobListCard";
import EmptyJob from "./EmptyJob";
import { motion } from "framer-motion";
import { useStoreContext } from "./JobContextapi/store";

const ActiveTab = ({ data }: { data: any }) => {
    const { direction } = useStoreContext() as any;
    const jobs = data?.results;
    if (jobs?.length == 0) {
        return <EmptyJob title="No Jobs" message="Do not know yet" />;
    }
    return (
        <motion.div
            className="grid gap-3 md:gap-6 lg:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 overflow-y-auto overflow-x-hidden"
            initial={{ x: direction === "r" ? 1000 : -450 }}
            transition={{ type: "just" }}
            animate={{ x: 0 }}
        >
            {jobs?.map((job: any) => {
                return <JobListCard data={job} key={job.id} />;
            })}
        </motion.div>
    );
};

export default ActiveTab;
