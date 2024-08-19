import React from "react";
import JobDetail from "./JobDetail";
import PipeLine from "./PipeLine";
import Applicants from "./Applicants";
import Insights from "./Insights";
import SlideWrapper from "./SlideWrapper";
import AiMatches from "./AiMatches";

const Tab = () => {
    return (
        <SlideWrapper>
            <JobDetail />
            <PipeLine />
            <Applicants />
            <AiMatches />
            <Insights />
        </SlideWrapper>
    );
};

export default Tab;
