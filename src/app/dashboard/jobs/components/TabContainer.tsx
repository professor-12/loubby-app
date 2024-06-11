"use client";
import { helpFetch } from "@/hooks/useFetch";
import { getActiveJobs } from "@/store/slices/jobListSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const DynamicTab = dynamic(() => import("./Tab"), {
    ssr: false,
    loading: (_) => <span>Loafinsddc</span>,
});


export type TabMode = "Active" | "Inactive" | "Draft";

const TabContainer = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        helpFetch(
            "https://api.loubby.ai/api/v1/employer/listing/?pages=1&pageSize=120&category=active",
            localStorage.getItem("token") as string
        )
            .then((e) => e.json())
            .then((r) => {
                dispatch!(getActiveJobs(r?.data));
            });
    }, [dispatch]);

    return (
        <div className="p-3">
            <div className="h-3 w-full flex "/>
                <DynamicTab/>
      
        </div>
    );
};

export default TabContainer;
