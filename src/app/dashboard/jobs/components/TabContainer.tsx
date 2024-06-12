"use client";
import { helpFetch } from "@/hooks/useFetch";
import { getActiveJobs, getInactiveJobs } from "@/store/slices/jobListSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/lib/constants/BaseURL";

const DynamicTab = dynamic(() => import("./Tab"), {
    ssr: false,
    loading: (_) => <span>Loafinsddc</span>,
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
        <div className="p-3">
            <div className="h-3 w-full flex" />
            <DynamicTab />
        </div>
    );
};

export default TabContainer;
