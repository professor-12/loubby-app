import React from "react";
import Form from "./Form";

const JobListingForm = () => {
    return (
        <div>
            <div className="bg-[#EAF3FF] rounded-md  p-5 text-[0.7rem] md:text-xs text-blue-600">
                <p>
                    Upload a Job Description (JD) to speed up job posting. Our
                    AI will auto-fill fields for an efficient match between your
                    requirements and candidates
                </p>
            </div>
            <Form />
        </div>
    );
};

export default JobListingForm;
