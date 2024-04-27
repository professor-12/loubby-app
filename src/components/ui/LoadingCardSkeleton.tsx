import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingCardSkeleton = () => {
    return (
        <div className="white bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-2">
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
        <div className="white bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-1">
            <div>
                <Skeleton height={100} width={100} borderRadius={"100%"} />
            </div>
            <div>
                <Skeleton width={"60%"} height={"1rem"} />
            </div>
            <div>
                <Skeleton width={"80%"} height={"2rem"} />
            </div>
            <div>
                <Skeleton width={"80%"} height={"3rem"} />
            </div>
        </div>
    );
};
export default LoadingCardSkeleton;
