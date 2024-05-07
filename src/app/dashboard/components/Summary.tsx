import React from "react";
import SummaryCard from "./SummaryCard";
import { useSelector } from "react-redux";
const detail = ["New Matches", "Jobs listed", "Upcoming interviews"];
const Summary = async () => {
    const { data } = useSelector((state: any) => state.job);
    const { data: interview } = useSelector((state: any) => state.interview);
    return (
        <div className="grid w-full   md:grid-cols-3 gap-3">
            <SummaryCard title={detail[0]} amount={0}></SummaryCard>
            <SummaryCard
                title={detail[1]}
                amount={data?.results.length}
            ></SummaryCard>
            <SummaryCard
                title={detail[2]}
                amount={interview?.results.length}
            ></SummaryCard>
        </div>
    );
};

export default Summary;
