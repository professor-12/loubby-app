import React from "react";
import SummaryCard from "./SummaryCard";
import { helpFetch } from "@/hooks/useFetch";

const detail = ["New Matches", "Jobs listed", "Upcoming interviews"];
const Summary = async () => {
    const get = helpFetch;
    const namingishardlol = localStorage.getItem("token") as string;
    const promises = [
        get(
            "https://api.loubby.ai/api/v1/employer/listing/new-job-matches",
            namingishardlol
        ).then((res) => res.json()),
        get(
            "https://api.loubby.ai/api/v1/employer/listing/good-fit-candidate",
            namingishardlol
        ).then((res) => res.json()),
        get(
            "https://api.loubby.ai/api/v1/employer/interview-fair/get/all",
            namingishardlol
        ).then((res) => res.json()),
    ];

    const simultaneous = await Promise.all(promises);
    return (
        <div className="grid w-full   md:grid-cols-3 gap-3">
            {simultaneous.map(({ data }, index) => {
                return (
                    <SummaryCard
                        title={detail[index]}
                        amount={data.length}
                        key={index}
                    ></SummaryCard>
                );
            })}
        </div>
    );
};

export default Summary;
