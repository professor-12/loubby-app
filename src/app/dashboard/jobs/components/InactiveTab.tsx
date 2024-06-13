import React from "react";
import JobListCard from "./JobListCard";
import EmptyJob from "./EmptyJob";
import { motion } from "framer-motion";
import { useStoreContext } from "./JobContextapi/store";
const InactiveTab = ({ data }: { data: any }) => {
    const { direction } = useStoreContext() as any;
    const jobs = data?.results;

    if ((jobs?.length as number) == 0) {
        return (
            <EmptyJob
                title="You have not created any opening"
                message="Create a job opening to easily find and manage candidates"
            />
        );
    }
    return (
        <motion.div
            initial={{
                x: direction === "r" ? -450 : 1000,
            }}
            transition={{ type: "just" }}
            animate={{ x: 0 }}
            className="grid gap-4 md:gap-6 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 overflow-y-auto"
        >
            {jobs?.map((job: any) => {
                return <JobListCard data={job} key={job.id} />;
            })}
        </motion.div>
    );
};

export default InactiveTab;
