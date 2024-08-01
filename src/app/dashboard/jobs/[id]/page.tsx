import React, { FC, PropsWithChildren } from "react";
import JobDetailsHeader from "./JobDetailsHeader";
import JobDetailProvider from "./contextApi";

const JobDetails: FC<{ params: { id: string } }> = ({ params }) => {
    return (
        <JobDetailProvider>
            <div className="bg-[#F2F4F7] min-h-svh">
                <JobDetailsHeader />
            </div>
        </JobDetailProvider>
    );
};

export default JobDetails;
