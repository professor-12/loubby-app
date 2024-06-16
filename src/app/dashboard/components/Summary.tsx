"use client";
import React from "react";
import SummaryCard from "./SummaryCard";
import LoadingCardSkeleton from "@/components/ui/LoadingCardSkeleton";
import { fetchEvents, fetchInterViews, fetchMatches } from "@/lib/utils/lib";
import { useQuery } from "@tanstack/react-query";

const detail = ["New Matches", "Jobs listed", "Upcoming interviews"];
const Summary = () => {
    const token = localStorage.getItem("token") as string;
    const matches = useQuery({
        queryKey: ["matches-id"],
        queryFn: () => fetchMatches<string>(token),
        enabled: !!token,
    });
    const job = useQuery({
        queryKey: ["job-id"],
        queryFn: () => fetchInterViews<string>(token as string),
        enabled: !!token,
    });
    const schedule = useQuery({
        queryKey: ["schedule-id"],
        queryFn: () => fetchEvents<string>(token),
        enabled: !!token,
    });
    return (
        <div className="grid w-full   md:grid-cols-3 gap-3">
            {matches?.isPending ? (
                <LoadingCardSkeleton />
            ) : (
                <SummaryCard
                    bg="#EAF3FF"
                    color="#1A73E8"
                    title={detail[0]}
                    amount={matches?.data?.data?.length}
                ></SummaryCard>
            )}
            {job?.isPending ? (
                <LoadingCardSkeleton />
            ) : (
                <SummaryCard
                    bg="#ECFDF3"
                    color="#14A061"
                    title={detail[1]}
                    amount={job?.data?.data?.results?.length}
                ></SummaryCard>
            )}
            {schedule?.isPending ? (
                <LoadingCardSkeleton />
            ) : (
                <SummaryCard
                    bg="#FFFAEB"
                    color="#DF7314"
                    title={detail[2]}
                    amount={schedule?.data?.data?.results?.length}
                ></SummaryCard>
            )}
        </div>
    );
};

export default Summary;
