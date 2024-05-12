import React from "react";
import Steps from "./components/Steps";
import JobDetails from "./components/JobDetails";

const page = () => {
    return (
        <div className="py-4">
            <div>
                <h1 className="text-center font-medium">
                    Create New Job Listing
                </h1>
                <p className="text-center text-sm font-light">
                    Create a job post and start hiring in minutes
                </p>
            </div>
            <Steps />
            <div className="container lg:w-[59%] mx-auto py-6 lg:p-12">
                <JobDetails />
            </div>
        </div>
    );
};

export default page;
