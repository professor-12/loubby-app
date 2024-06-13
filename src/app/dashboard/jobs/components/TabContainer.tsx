"use client";
import { helpFetch } from "@/hooks/useFetch";
import { getActiveJobs, getInactiveJobs } from "@/store/slices/jobListSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/lib/constants/BaseURL";
import Loading from "./Loading";

const DynamicTab = dynamic(() => import("./Tab"), {
    ssr: false,
    loading: () => <Loading />,
});

const Base = BaseUrl;

export type TabMode = "Active" | "Inactive" | "Draft";

const TabContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        helpFetch(
            `${Base}employer/listing/?pages=1&pageSize=25&category=inactive`,
            localStorage.getItem("token") as string
        )
            .then((e) => e.json())
            .then((r) => {
                dispatch(getInactiveJobs(r?.data));
            });
        helpFetch(
            `${Base}employer/listing/?pages=1&pageSize=120&category=active`,
            localStorage.getItem("token") as string
        )
            .then((e) => e.json())
            .then((r) => {
                dispatch!(getActiveJobs(r?.data));
            });
    }, [dispatch]);

    return (
        <div className="p-3 pb-14 overflow-y-auto  overflow-x-hidden">
            <div className="hidden xl:flex w-full h-16" />
            <DynamicTab />
        </div>
    );
};

export default TabContainer;
