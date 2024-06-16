"use client";
import { fetchEvents, fetchInterViews, fetchMatches } from "@/lib/utils/lib";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useSummaryData = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(localStorage.getItem("token") as string);
    }, []);
    const matches = useQuery({
        queryKey: ["matches-id"],
        queryFn: () => fetchMatches<string>(token),
        enabled: !!token,
    });
    const job = useQuery({
        queryKey: ["job-id"],
        queryFn: () => fetchInterViews<string>(token as string),
        enabled: !!token,
    });
    const schedule = useQuery({
        queryKey: ["schedule-id"],
        queryFn: () => fetchEvents<string>(token),
        enabled: !!token,
    });
    return { matches , schedule, job };
};

export default useSummaryData;
