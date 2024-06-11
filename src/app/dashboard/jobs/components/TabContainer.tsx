"use client";
import { helpFetch } from "@/hooks/useFetch";
import { getActiveJobs } from "@/store/slices/jobListSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./Tab";

const DynamicTab = dynamic(() => import("./Tab"), {
    ssr: false,
    loading: (_) => <span>Loafinsddc</span>,
});
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

export type TabMode = "Active" | "Inactive" | "Draft";

const TabContainer = () => {
    const dispatch = useDispatch();
    const mode = useSearchParams().get("tab") ?? ("Active" as TabMode);
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
    const route = useSearchParams().get("tab") ?? ("Active" as TabMode);
    return (
        <div>
            <AnimatePresence>
                    <DynamicTab mode={mode as any} />
            </AnimatePresence>
        </div>
    );
};

export default TabContainer;
