"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (!token && !user) return router.push("onboarding/login");

        return router.push("/dashboard");
    }, [router]);

    return null
};

export default Page;
