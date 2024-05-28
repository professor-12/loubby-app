"use client";
import React from "react";
import Steps from "./components/Steps";
import JobDetails from "./components/JobDetails";
import JobListingForm from "./components/JobListingForm";
import { motion } from "framer-motion";
const page = () => {
    return (
        <motion.div
            animate={{ x: [1000, 0] }}
            transition={{ type: "spring" }}
            className="py-4"
        >
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
            <div className="xl:w-[52%] container mx-auto  p-3 md:p-6 bg-white rounded-md overflow-y-clip">
                <JobListingForm />
            </div>
        </motion.div>
    );
};

export default page;
