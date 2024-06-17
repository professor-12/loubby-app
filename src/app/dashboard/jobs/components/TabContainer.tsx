"use client";
import { helpFetch } from "@/hooks/useFetch";
import { getActiveJobs, getInactiveJobs } from "@/store/slices/jobListSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/lib/constant";
import Loading from "./Loading";

const DynamicTab = dynamic(() => import("./Tab"), {
    ssr: false,
    loading: () => <Loading />,
});

const Base = BaseUrl;

export type TabMode = "Active" | "Inactive" | "Draft";

const TabContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.jobList);
    useEffect(() => {
        const token = localStorage.getItem("token") as string;
        helpFetch(
            `${Base}employer/listing/?pages=1&pageSize=25&category=inactive`,
            token
        )
            .then((e) => e.json())
            .then((r) => {
                dispatch(getInactiveJobs(r?.data));
            });
        helpFetch(
            `${Base}employer/listing/?pages=1&pageSize=120&category=active`,
            token
        )
            .then((e) => e.json())
            .then((r) => {
                dispatch!(getActiveJobs(r?.data));
            });
    }, [dispatch]);

    return (
        <div className="p-3 pb-14 overflow-y-auto  overflow-x-hidden">
            <div className="hidden xl:flex w-full h-16" />
            <DynamicTab data={data} />
        </div>
    );
};

export default TabContainer;
