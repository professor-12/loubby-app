import React, { FC } from "react";
import JobDetailsHeader from "./JobDetailsHeader";
import JobDetailProvider from "./contextApi";
import Tab from "./Tab";

const JobDetails: FC<{ params: { id: string } }> = ({ params }) => {
    return (
        <JobDetailProvider>
            <div className=" bg-[#F2F4F7] pb-5 flex-1  max-h-[100vh] w-full  flex  flex-col">
                <JobDetailsHeader />
                <div className="w-full overflow-x-clip">
                    <Tab />
                </div>
            </div>
        </JobDetailProvider>
    );
};

export default JobDetails;
