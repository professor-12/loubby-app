import LoadingCardSkeleton from "@/components/ui/LoadingCardSkeleton";
import React from "react";

const fetchData = () =>
    new Promise((resolve, reject) => setTimeout(resolve, 2000));
const SummaryCard = async () => {
    const data = fetchData();
    return (
        <div className="grid w-full grid-cols-3 gap-3">
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
        </div>
    );
};

export default SummaryCard;
