import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingCardSkeleton = () => {
    return (
        <div className="white min-h-[8rem] bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-1">
            <div>
                <Skeleton height={38} width={38} borderRadius={12} />
            </div>
            <div>
                <Skeleton width={"60%"} />
            </div>
            <div>
                <Skeleton width={"80%"} />
            </div>
        </div>
    );
};

export const LoadinBigCard = () => {
    return (
        <div className="bg-white flex-1  rounded-lg p-1 md:p-4 shadow shadow-slate-200/40 space-y-[0.1rem]">
            <div>
                <Skeleton height={100} width={100} borderRadius={"100%"} />
            </div>
            <div>
                <Skeleton width={"80%"} height={"2rem"} />
            </div>
            <div>
                <Skeleton width={"80%"} height={"2.1rem"} />
            </div>
            <div>
                <Skeleton width={"100%"} height={"10rem"} />
            </div>
        </div>
    );
};
export default LoadingCardSkeleton;
