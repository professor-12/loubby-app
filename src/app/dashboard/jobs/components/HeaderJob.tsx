"use client";
import { AnimatePresence, animate, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const active = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
    >
        <path
            d="M6.5 8.16667L9 10.6667L17.3333 2.33333M16.5 9V14.8333C16.5 15.2754 16.3244 15.6993 16.0118 16.0118C15.6993 16.3244 15.2754 16.5 14.8333 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H12.3333"
            stroke="#027A48"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
const inactive = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M10.0013 13.3327V9.99935M10.0013 6.66602H10.0096M18.3346 9.99935C18.3346 14.6017 14.6037 18.3327 10.0013 18.3327C5.39893 18.3327 1.66797 14.6017 1.66797 9.99935C1.66797 5.39698 5.39893 1.66602 10.0013 1.66602C14.6037 1.66602 18.3346 5.39698 18.3346 9.99935Z"
            stroke="#C01048"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

const draft = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M9.16797 3.33417H3.33464C2.89261 3.33417 2.46868 3.50977 2.15612 3.82233C1.84356 4.13489 1.66797 4.55881 1.66797 5.00084V16.6675C1.66797 17.1095 1.84356 17.5335 2.15612 17.846C2.46868 18.1586 2.89261 18.3342 3.33464 18.3342H15.0013C15.4433 18.3342 15.8673 18.1586 16.1798 17.846C16.4924 17.5335 16.668 17.1095 16.668 16.6675V10.8342M15.418 2.08417C15.7495 1.75265 16.1991 1.56641 16.668 1.56641C17.1368 1.56641 17.5864 1.75265 17.918 2.08417C18.2495 2.41569 18.4357 2.86533 18.4357 3.33417C18.4357 3.80301 18.2495 4.25265 17.918 4.58417L10.0013 12.5008L6.66797 13.3342L7.5013 10.0008L15.418 2.08417Z"
            stroke="#C4320A"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
const HeaderJob = () => {
    const [direction, setDirection] = useState<"r" | "l">("r");
    const router = useRouter();
    const NavList = [
        { name: "Active", id: 1, Svg: active },
        { name: "Inactive", id: 2, Svg: inactive },
        { name: "Draft", id: 3, Svg: draft },
    ];
    return (
        <div className="bg-white min-h-32 p-5 pt-4 pb-0 space-y-7 flex flex-col justify-between">
            <div className="flex justify-between  items-end">
                <div>
                    <h1 className="md:text-lg xl:text-xl font-medium">
                        Job listings
                    </h1>
                    <p className="text-xs text-neutral-600">
                        View and manage your jobs
                    </p>
                </div>
                <button
                    onClick={() => {
                        router.push("jobs/joblisting");
                    }}
                    className="bg-[#1a73e8] px-3 text-white  rounded-lg items-center cursor-pointer p-[0.3rem] space-x-1"
                >
                    <span className="ml-2">+</span>{" "}
                    <span className="text-xs text-center text-white ">
                        Post a Job
                    </span>
                </button>
            </div>
            <div className="">
                <div className="flex space-x-7 lg:text-sm text-xs">
                    {NavList.map((item) => {
                        return <TabLink key={item.id} {...item} />;
                    })}
                    {/*TODO  this as to be a separate component  */}
                </div>
            </div>
        </div>
    );
};

export default HeaderJob;

export const TabLink = ({
    id,
    name,
    Svg,
}: {
    id: string | number;
    name: string;
    Svg: React.ReactNode;
}) => {
    const params = useSearchParams();
    const route = useRouter();
    const active = params.get("tab") === name;

    const handleChangeTab = () => {
        route.push(`?tab=${name}`);
    };
    return (
        <div
            onClick={handleChangeTab}
            className="text-[#667085] cursor-pointer space-y-3 md:space-y-2"
            key={id}
        >
            <div className="flex items-center space-x-4">
                <span>{Svg}</span> <span>{name}</span>
            </div>
            <AnimatePresence>
                {active && (
                    <motion.div
                        animate={{
                            width: ["0%", "100%"],
                            transition: { duration: 0.4 },
                        }}
                        exit={{ width: ["100%", "0%"] }}
                        className="bg-blue-500 float-left  rounded-md h-[0.1rem]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
