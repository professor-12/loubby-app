import React from "react";
import SummaryCard from "./SummaryCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const detail = ["New Matches", "Jobs listed", "Upcoming interviews"];
const Summary = async () => {
    const { data } = useSelector((state: any) => state.job);
    const { data: interview } = useSelector((state: any) => state.interview);
    return (
        <div className="grid w-full   md:grid-cols-3 gap-3">
            <SummaryCard
                bg="#EAF3FF"
                color="#1A73E8"
                title={detail[0]}
                amount={0}
            ></SummaryCard>
            <SummaryCard
                bg="#ECFDF3"
                color="#14A061"
                title={detail[1]}
                amount={data?.results.length}
            ></SummaryCard>
            <SummaryCard
                bg="#FFFAEB"
                color="#DF7314"
                title={detail[2]}
                amount={interview?.results.length}
            ></SummaryCard>
        </div>
    );
};

export default Summary;
