"use client";
import React, { Suspense } from "react";
import Header from "./components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingCardSkeleton, {
    LoadinBigCard,
} from "@/components/ui/LoadingCardSkeleton";
import SummaryCard from "./components/SummaryCard";

const Page = () => {
    return (
        <div>
            <Header />
            <div className="flex py-4 space-x-3">
                <div className="min-w-[68%]">
                    <div className="">
                        <Suspense
                            fallback={
                                <div className="grid w-full grid-cols-3 gap-3">
                                    <LoadingCardSkeleton />
                                    <LoadingCardSkeleton />
                                    <LoadingCardSkeleton />
                                </div>
                            }
                        >
                            <SummaryCard />
                        </Suspense>
                        <div className="col-span-3 space-y-2">
                            <div>
                                <LoadingCardSkeleton />
                            </div>
                            <div>
                                <LoadingCardSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
                <LoadinBigCard />
            </div>
        </div>
    );
};

export default Page;
