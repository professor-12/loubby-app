import React from "react";
import SummaryCard from "./SummaryCard";
import { helpFetch } from "@/hooks/useFetch";

const Summary = async () => {
    const get = helpFetch;
    const namingishardlol = localStorage.getItem("token") as string;

    const promises = [
        get(
            "https://api.loubby.ai/api/v1/employer/listing/new-job-matches",
            namingishardlol
        ).then((res) => res.json()),
        get(
            "https://api.loubby.ai/api/v1/employer/listing/new-job-matches",
            namingishardlol
        ).then((res) => res.json()),
        get(
            "https://api.loubby.ai/api/v1/employer/listing/new-job-matches",
            namingishardlol
        ).then((res) => res.json()),
    ];

    const simultaneous = await Promise.all(promises);
    return (
        <div className="grid w-full  md:grid-cols-3 gap-3">
            {simultaneous.map(({ data }, index) => {
                return <div key={index}>{data.length}</div>;
            })}
        </div>
    );
};

export default Summary;
