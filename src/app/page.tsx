"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import loading from "./loading";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (!token && !user) return router.push("onboarding/login");
        return router.push("/dashboard");
    }, [router]);
    return loading();
};

export default Page;
