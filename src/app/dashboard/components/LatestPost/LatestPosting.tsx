import React from "react";
import { RxCaretRight } from "react-icons/rx";
import LatestPost from "./LatestPost";
import Button from "@/app/onboarding/create-account/Button";
import { fetchInterViews } from "@/lib/utils/lib";
import { useQuery } from "@tanstack/react-query";
import LoadingCardSkeleton from "@/components/ui/LoadingCardSkeleton";
const LatestPosting = () => {
    const { data, isPending } = useQuery({
        queryKey: ["latestpost"],
        queryFn: () =>
            fetchInterViews<string>(localStorage.getItem!("token") as string),
    });
    if (isPending || !data) {
        return <LoadingCardSkeleton />;
    }
    return (
        <div className="white gap-6 flex flex-col min-h-[8rem] bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-2">
            <div className="flex items-center justify-between w-full">
                <p className="font-medium text-clip">Latest Posting</p>
                <Button
                    className="text-blue-600 flex items-center text-sm space-x-1 cursor-pointer"
                    link="dashboard/jobs"
                >
                    <span>See more</span>{" "}
                    <RxCaretRight className="text-blue-500 text-2xl" />
                </Button>
            </div>
            <div className="pb-8 p-3">
                <LatestPost results={data} />
            </div>
        </div>
    );
};

export default LatestPosting;
