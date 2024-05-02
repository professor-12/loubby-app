"use client";
import React from "react";
import Header from "./components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingCardSkeleton, {
    LoadinBigCard,
} from "@/components/ui/LoadingCardSkeleton";
import dynamic from "next/dynamic";
const Summary = dynamic(() => import("./components/Summary"), {
    ssr: false,
    loading: (_) => (
        <div className="grid w-full md:grid-cols-3 gap-3">
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
        </div>
    ),
});

const Page = () => {
    return (
        <div>
            <Header />
            <div className="flex py-4 space-x-3">
                <div className="min-w-[68%]">
                    <div className="space-y-4">
                        <Summary />
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
                <div className="md:flex hidden">
                    <LoadinBigCard />
                </div>
            </div>
        </div>
    );
};

export default Page;
