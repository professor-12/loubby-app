import React from "react";
import Steps from "./components/Steps";
import JobDetails from "./components/JobDetails";
import JobListingForm from "./components/JobListingForm";

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
            <div className="container xl:w-[59%] mx-auto py-6  lg:px-12">
                <JobDetails />
            </div>
            <div className="xl:w-[56%] container mx-auto  p-3 md:p-6 bg-white rounded-md overflow-y-clip">
                <JobListingForm />
            </div>
        </div>
    );
};

export default page;
