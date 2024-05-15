"use client";
import React, { Suspense, useCallback, useEffect } from "react";
import Header from "./components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingCardSkeleton, {
    LoadinBigCard,
} from "@/components/ui/LoadingCardSkeleton";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/store/slices/userReducer";
import { fetchJobs } from "@/store/slices/jobSlice";
import { fetchInterView } from "@/store/slices/interviewSlice";
import { helperFetch } from "@/lib/utils/helpFetch";
import GoodForYou from "./components/goodfit/GoodForYou";
import UpComingSchedule from "./components/UpComingSchedule";
import PipeLineSummary from "./components/PipeLineSummary";
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
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
        </div>
    ),
});

const Page = () => {
    const dispatch = useDispatch();
    const getJob = useCallback(async () => {
        const token = localStorage!.getItem!("token");
        let data = await helperFetch(
            "https://api.loubby.ai/api/v1/employer/listing/",
            token as string
        );
        dispatch(fetchJobs(data));
    }, [dispatch]);
    const Interview = useCallback(async () => {
        const token = localStorage.getItem!("token") as string;
        const getInterView = await helperFetch(
            "https://api.loubby.ai/api/v1/shared/events/all",
            token
        );

        dispatch(fetchInterView(getInterView));
    }, [dispatch]);

    useEffect(() => {
        const fetchDetails = async () => {
            const token = localStorage!.getItem!("token") as string;
            const response = await fetch(
                "https://api.loubby.ai/api/v1/user/details",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            dispatch!(getUser(await response.json()));
        };
        fetchDetails();
        Interview();
        getJob();
    }, [dispatch, getJob, Interview]);

    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row py-4 space-y-3 md:space-y-0 lg:space-x-3">
                <div className="w-full  lg:max-w-[68%]">
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
                <div className="lg:flex  lg:max-w-[39%] flex-col space-y-3 flex-1 h-auto">
                    <UpComingSchedule />
                    <PipeLineSummary />
                </div>
            </div>
        </div>
    );
};

export default Page;
