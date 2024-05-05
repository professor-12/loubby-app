"use client";
import React, { useCallback, useEffect } from "react";
import Header from "./components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingCardSkeleton, {
    LoadinBigCard,
} from "@/components/ui/LoadingCardSkeleton";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { getUser } from "@/store/slices/userReducer";
import { fetchJobs } from "@/store/slices/jobSlice";
import { fetchInterView } from "@/store/slices/interviewSlice";

const helperFetch = async (url: string, token?: string, method?: string) => {
    let request: Response | any;
    if (token) {
        console.log(token);
        request = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: method ?? "GET",
        });
    } else {
        request = await fetch(url, {
            method: method ?? "GET",
        });
    }
    if (!request.ok) {
        const respost = await request.json();
        return { status: request.status, message: respost.message };
    }

    return request.json();
};

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

        dispatch(fetchInterView(getInterView))
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
            if (!token || !response.ok) {
                return redirect("/login");
            }
            dispatch!(getUser(await response.json()));
        };
        fetchDetails();
        Interview()
        getJob();
    }, [dispatch, getJob, Interview]);

    return (
        <div>
            <Header />
            <div className="flex py-4 space-x-3">
                <div className="w-full md:max-w-[68%]">
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
                <div className="md:flex  flex-1 h-auto  hidden">
                    <LoadinBigCard />
                </div>
            </div>
        </div>
    );
};

export default Page;
