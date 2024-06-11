import React from "react";
import JobListCard from "./JobListCard";

const ActiveTab = ({ data }: { data: any }) => {
    const jobs = data?.results;
    return (
        <div className="grid gap-4 md:gap-6 lg:grid-cols-5 md:grid-cols-3  grid-cols-1 overflow-y-auto">
            {jobs?.map((job: any) => {
                return <JobListCard data={job} key={job.id} />;
            })}
        </div>
    );
};

export default ActiveTab;
