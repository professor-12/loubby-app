import React from "react";
import Form from "./Form";

const JobListingForm = () => {
    return (
        <div>
            <div className="bg-[#EAF3FF] rounded-md  p-5 text-xs text-blue-600">
                Upload a Job Description (JD) to speed up job posting. Our AI
                will auto-fill fields for an efficient match between your
                requirements and candidates
            </div>
            <Form />
        </div>
    );
};

export default JobListingForm;
