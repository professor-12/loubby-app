import LoadingCardSkeleton from "@/components/ui/LoadingCardSkeleton";
import React from "react";
import Skeleton from "react-loading-skeleton";


const SummaryCard = async ({ data }: { data(): void }) => {
    return <div className="grid w-full grid-cols-3 gap-3">
       <div className="white bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-1">
            <div>
                <Skeleton height={100} width={100} borderRadius={"100%"} />
            </div>
            <div>
                <Skeleton width={"60%"} height={"1rem"} />
            </div>          
        </div>
    </div>;
};

export default SummaryCard;
