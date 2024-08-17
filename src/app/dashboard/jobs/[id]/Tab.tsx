import React from "react";
import JobDetail from "./JobDetail";
import PipeLine from "./PipeLine";
import Applicants from "./Applicants";
import Insights from "./Insights";
import SlideWrapper from "./SlideWrapper";
import AiMatches from "./AiMatches";

const Tab = () => {
    return (
        <div className="overflow-hidden">
            <SlideWrapper>
                <JobDetail />
                <PipeLine />
                <Applicants />
                <AiMatches />
                <Insights />
            </SlideWrapper>
        </div>
    );
};

export default Tab;
