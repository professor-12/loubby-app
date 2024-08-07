import React from "react";
import JobListCard from "./JobListCard";
import EmptyJob from "./EmptyJob";

const ActiveTab = ({ data }: { data: any }) => {
    const jobs = data?.results;
    if (jobs?.length == 0) {
        return (
            <EmptyJob
                title="You have not created any opening"
                message="Create a job opening to easily find and manage candidates"
            />
        );
    }
    return (
        <div className="grid gap-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 overflow-y-auto overflow-x-hidden">
            {jobs?.map((job: any) => {
                return <JobListCard data={job} key={job._id} />;
            })}
        </div>
    );
};

export default ActiveTab;
