import React from "react";

const SummaryCard = async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 8000); // Simulating a 2-second delay
        });
    };
    await fetchData();
    return <div className="">SummaryCard</div>;
};

export default SummaryCard;
