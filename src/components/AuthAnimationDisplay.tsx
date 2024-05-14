"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
const slideShow = [
    {
        title: "All you need to hire & get hired fast!",
        body: "Loubby Is your one stop-shop for instant hiring! Both Employers and Candidates have all the tools needed to hire and get hired.",
        svg: "/image (2).png",
        color: "#EAE99B",
        text_Color: "",
    },
    {
        title: "AI-Powered Applicant Tracking System",
        body: "Full feature applicant tracking system to keep you informed on the status of hiring pipeline with best in class candidate skill matching.",
        svg: "/image (1).png",
        color: "#C0ECCC",
        text_Color: "#1E8E3E",
    },
    {
        title: "Live Interviewing & Collaboration tools",
        body: "Loubby’s collaborations tools such as whiteboard, notes, scorecards, live or one way interview and more options to give you the best interview experience.",
        svg: "/image (3).png",
        color: "#C0ECCC",
        text_Color: "#CB6015",
    },
    {
        title: "Onboarding & Employee Portal",
        body: "Well designed onboarding, e-signature, off-boarding workflows with document checklist, offer letter/contract templates and training materials for seamless ramp-up.",
        svg: "/image (4).png",
        color: "#FFDBFF",
        text_Color: "#710193",
    },
    {
        title: "Time, Performance & Presence Management",
        body: "World class timesheet and performance management system design and optimized for remote teams.",
        svg: "/image (5).png",
        color: "#F7D2D2",
        text_Color: "#D53333",
    },
];

const AuthAnimationDisplay = () => {
    const { index } = useSlideAnimation(slideShow);
    const item = slideShow[index];
    return (
        <>
            <span
                style={{ backgroundColor: item?.color }}
                className="xl:h-[18rem] h-[12rem] w-[12rem] bottom-[4rem]  left-24 fixed flex items-center justify-center xl:min-w-[18rem] rounded-full"
            ></span>
            <div className="flex items-center p-10 xl:p-14 justify-center h-screen overflow-hidden">
                <motion.div
                    key={index}
                    animate={{ y: [-250, 0] }}
                    exit={{ y: -50, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4 }}
                    className="gap-y-5 flex h-[80%] p-9 flex-col justify-between"
                >
                    <h1
                        style={{ color: item?.text_Color }}
                        className="xl:text-7xl md:text-5xl text-center font-bold text-[#CB6015]"
                    >
                        {item.title}
                    </h1>

                    <div className="flex p-2 justify-between  items-center">
                        <div className="h-auto md:hidden lg:flex z-50 min-w-[12rem]">
                            <Image
                                className="object-contain   z-50"
                                src={item?.svg}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>
                        <h1 className="xl:text-2xl  ml-24 text-left">
                            {item?.body}
                        </h1>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default AuthAnimationDisplay;
