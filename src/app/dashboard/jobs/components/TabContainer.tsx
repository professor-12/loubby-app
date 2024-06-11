"use client";
import { helpFetch } from "@/hooks/useFetch";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TabContainer = () => {
    useEffect(() => {
        helpFetch(
            "https://api.loubby.ai/api/v1/employer/listing/?pages=1&pageSize=120&category=active",
            localStorage.getItem("token") as string
        ).then((e) => console.log(e));
    }, []);
    const route = useSearchParams().get("tab") ?? "Active";
    return <div>TabContainer</div>;
};

export default TabContainer;
