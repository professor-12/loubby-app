import React, { FC } from "react";
import JobDetailsHeader from "./JobDetailsHeader";
import JobDetailProvider from "./contextApi";
import Tab from "./Tab";

const JobDetails: FC<{ params: { id: string } }> = ({ params }) => {
    return (
        <JobDetailProvider>
            <div className=" bg-[#F2F4F7] overflow-y-hidden w-full overflow-hidden  h-screen">
                <div className="">
                    <JobDetailsHeader />
                </div>
                <Tab />
            </div>
        </JobDetailProvider>
    );
};

export default JobDetails;
