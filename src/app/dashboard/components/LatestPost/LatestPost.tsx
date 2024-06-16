"use client";
import Image from "next/image";
import React from "react";
import { TbPlus } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchInterViews } from "@/lib/utils/lib";
import LoadingCardSkeleton from "@/components/ui/LoadingCardSkeleton";
const LatestPost = () => {
    const route = useRouter();
    const { data, isPending  } = useQuery({
        queryKey: ["latestpost"],
        queryFn: () =>
            fetchInterViews<string>(localStorage.getItem!("token") as string),
    });

    const results = data?.data?.results;

    if (isPending) {
        <LoadingCardSkeleton />;
    }
    if (results?.length == 0) {
        return (
            <div className="w-full flex flex-col gap-6 items-center justify-center">
                <div className="text-center space-y-1">
                    <div className="mx-auto w-full flex items-center justify-center">
                        <Image
                            src={"/latestpost.svg"}
                            alt=""
                            width={80}
                            height={500}
                        />
                    </div>
                    <h1 className="font-semibold">
                        It All Starts From a Job Post!
                    </h1>
                    <p className="text-xs  text-small-p-mute">
                        Create a job post to easily find and manage candidates
                    </p>
                </div>
                <button
                    onClick={() => route.push("dashboard/jobs/joblisting")}
                    className="text-cener flex text-white space-x-1 bg-[#1A73E8] p-2 rounded-lg px-4"
                >
                    <TbPlus className="text-xl" />{" "}
                    <span className="text-sm">Post a Job</span>{" "}
                </button>
            </div>
        );
    }

    return <div>LatestPost</div>;
};

export default LatestPost;
