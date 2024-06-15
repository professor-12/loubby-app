"use client";
import React, { Suspense, useCallback, useEffect } from "react";
import Header from "./components/Header";
import LoadingCardSkeleton, {
    LoadinBigCard,
} from "@/components/ui/LoadingCardSkeleton";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { getUser } from "@/store/slices/userReducer";
import { fetchJobs } from "@/store/slices/jobSlice";
import { fetchInterView } from "@/store/slices/interviewSlice";
import { helperFetch } from "@/lib/utils/helpFetch";
import GoodForYou from "./components/goodfit/GoodForYou";

import PipeLineSummary from "./components/PipeLineSummary";
import { getNextMonthDate } from "@/lib/utils/helpers";

const LatestPosting = dynamic(
    () => import("./components/LatestPost/LatestPosting"),
    {
        ssr: false,
        loading: (_) => <LoadingCardSkeleton />,
    }
);
const Summary = dynamic(() => import("./components/Summary"), {
    ssr: false,
    loading: (_) => (
        <div className="grid w-full md:grid-cols-3 gap-3">
            {new Array(3).fill(null).map((_, i) => {
                return <LoadingCardSkeleton key={i + "loadin_comp"} />;
            })}
        </div>
    ),
});

const UpComingSchedule = dynamic(
    () => import("./components/Schedule/UpComingSchedule"),

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

const Page = () => {
    const dispatch = useDispatch();
    const getJob = async () => {
        const token = localStorage!.getItem!("token");
        return await helperFetch(
            "https://api.loubby.ai/api/v1/employer/listing/",
            token as string
        );
    };

    const Interview = async () => {
        const token = localStorage.getItem!("token") as string;
        return await helperFetch(
            `https://api.loubby.ai/api/v1/shared/events/all?start=${new Date().toISOString()}&end=${getNextMonthDate(
                new Date()
            ).toISOString()}`,
            token
        );
    };

    const fetchDetails = async () => {
        const token = localStorage.getItem!("token") as string;
        return await helperFetch(
            "https://api.loubby.ai/api/v1/user/details/",
            token
        );
    };

    const fetchSummary = useCallback(async () => {
        const [a, b, c] = await Promise.all([
            fetchDetails(),
            Interview(),
            getJob(),
        ]);
        dispatch(fetchJobs(c));
        dispatch(fetchInterView(b));
        dispatch(getUser(a));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchSummary();
    }, [fetchSummary]);

    return (
        <div className="p-4 w-full  overflow-y-auto overflow-x-hidden h-screen pb-20">
            <Header />
            <div className="flex flex-col lg:flex-row py-4 space-y-3 md:space-y-0 lg:space-x-3">
                <div className="w-full  lg:min-w-[61%]">
                    <div className="space-y-4">
                        <Summary />
                        <div className="col-span-3 space-y-4">
                            <div>
                                <LatestPosting />
                            </div>
                            <div>
                                <GoodForYou />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex  lg:min-w-[30%] flex-col space-y-3 flex-1 min-h-[56rem]">
                    <UpComingSchedule />

                    <PipeLineSummary />
                </div>
            </div>
        </div>
    );
};

export default Page;
