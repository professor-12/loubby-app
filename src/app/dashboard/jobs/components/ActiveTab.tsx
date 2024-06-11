import React from "react";
import JobListCard from "./JobListCard";

const ActiveTab = ({ data }: { data: any }) => {
    const jobs = data?.results;
    return (
        <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
            <JobListCard />
            <JobListCard />
            <JobListCard />
        </div>
    );
};

export default ActiveTab;
