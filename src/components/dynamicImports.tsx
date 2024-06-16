"use client";
import dynamic from "next/dynamic";
import LoadingCardSkeleton, { LoadinBigCard } from "./ui/LoadingCardSkeleton";

export const LatestPosting = dynamic(
    () => import("../app/dashboard/components/LatestPost/LatestPosting"),
    {
        ssr: false,
        loading: (_) => <LoadingCardSkeleton />,
    }
);

export const UpComingSchedule = dynamic(
    () => import("../app/dashboard/components/Schedule/UpComingSchedule"),

    {
        ssr: false,
        loading: () => {
            return (
                <div className="w-full">
                    <LoadinBigCard />
                </div>
            );
        },
    }
);

export const Summary = dynamic(
    () => import("../app/dashboard/components/Summary"),
    {
        ssr: false,
        loading: () => (
            <div className="grid w-full md:grid-cols-3 gap-3">
                {new Array(3).fill(null).map((_, i) => {
                    return <LoadingCardSkeleton key={i + "loadin_comp"} />;
                })}
            </div>
        ),
    }
);

export const MobileSideBar = dynamic(
    () => import("../app/dashboard/components/MobileSideNav"),
    {
        ssr: false,
    }
);
