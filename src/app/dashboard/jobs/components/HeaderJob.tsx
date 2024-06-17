"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useCallback } from "react";
import { useStoreContext } from "./JobContextapi/store";
import { NavList } from "@/lib/constant";
import Button from "@/app/onboarding/create-account/Button";

const HeaderJob: React.FC = () => {
    const { setX } = useStoreContext() as any;
    const router = useRouter();

    return (
        <div className="bg-white min-h-32 p-5 pt-4 pb-0 space-y-7 flex flex-col justify-between">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="md:text-lg xl:text-xl font-medium">
                        Job listings
                    </h1>
                    <p className="text-xs text-neutral-600">
                        View and manage your jobs
                    </p>
                </div>
                <Button
                    link="jobs/joblisting"
                    className="bg-[#1a73e8] px-3 text-white rounded-lg items-center cursor-pointer p-[0.3rem] space-x-1"
                >
                    <span className="ml-2">+</span>
                    <span className="text-xs text-center text-white">
                        Post a Job
                    </span>
                </Button>
            </div>
            <div>
                <div className="flex space-x-7 lg:text-sm text-xs">
                    {NavList.map((item) => (
                        <TabLink
                            setX={setX}
                            navLink={NavList}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderJob;

interface TabLinkProps {
    id: number;
    name: string;
    Svg: React.ReactNode;
    navLink: any[];
    setX: (x: number) => void;
}

export const TabLink: React.FC<TabLinkProps> = ({
    id,
    name,
    Svg,
    navLink,
    setX,
}) => {
    const params = useSearchParams();
    const router = useRouter();
    const tab = params.get("tab");
    const id_ = navLink.find(({ name }) => name === (tab ?? "Active"))?.id ?? 0;
    const active = (tab ?? "Active") === name;

    const handleChangeTab = useCallback(() => {
        router.push(`?tab=${name}`);
    }, [name, router]);

    useEffect(() => {
        setX(id_ * -100);
    }, [id_, setX]);

    return (
        <div
            onClick={handleChangeTab}
            className="text-[#667085] cursor-pointer space-y-3 md:space-y-2"
            key={id}
        >
            <button className="flex items-center space-x-4">
                <span>{Svg}</span> <span>{name}</span>
            </button>
            <AnimatePresence>
                {active && (
                    <motion.div
                        animate={{
                            width: ["0%", "100%"],
                            transition: { duration: 0.4 },
                        }}
                        exit={{ width: ["100%", "0%"] }}
                        className="bg-blue-500 float-left rounded-md h-[0.1rem]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
