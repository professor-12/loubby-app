import React from "react";
import EmptyJob from "../components/EmptyJob";

const Applicants = () => {
    return (
        <div className="flex items-center justify-center">
            <EmptyJob
                title="No candidate to show"
                message="We couldn’t find any candidate under this job or filter. Explore our directory to find talents"
            />
        </div>
    );
};

export default Applicants;
