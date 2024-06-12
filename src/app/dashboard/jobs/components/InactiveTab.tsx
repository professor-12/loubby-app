import React from "react";
import JobListCard from "./JobListCard";
import EmptyJob from "./EmptyJob";

const InactiveTab = ({ data }: { data: any }) => {
    const jobs = data?.results;

    if ((jobs?.length as number) == 0) {
        return <EmptyJob />;
    }
    return (
        <div className="grid gap-4 md:gap-6 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 overflow-y-auto">
            {jobs?.map((job: any) => {
                return <JobListCard data={job} key={job.id} />;
            })}
        </div>
    );
};

export default InactiveTab;
