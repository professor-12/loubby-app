import Chart from "@/components/ui/Chart";
import React from "react";

const PipeLineSummary = () => {
    return (
        <div className="rounded-lg p-3 bg-white space-y-4 py-5">
            <h1 className="font-medium text-pretty">Pipeline summary</h1>
            <Chart />
            <div className="space-x-4 py-3 flex text-sm">
                <div className="h-4 w-4 p-1 rounded-full bg-[#EAECF0]" />
                <span className="text-xs">No Applicants</span>
            </div>
        </div>
    );
};

export default PipeLineSummary;
