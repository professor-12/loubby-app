"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const slideShow = [
    {
        title: "All you need to hire & get hired fast!",
        body: "Loubby Is your one stop-shop for instant hiring! Both Employers and Candidates have all the tools needed to hire and get hired.",
        svg: "/image (2).png",
    },
    {
        title: "AI-Powered Applicant Tracking System",
        body: "Full feature applicant tracking system to keep you informed on the status of hiring pipeline with best in class candidate skill matching.",
        svg: "/image (1).png",
    },
    {
        title: "Live Interviewing & Collaboration tools",
        body: "Loubby’s collaborations tools such as whiteboard, notes, scorecards, live or one way interview and more options to give you the best interview experience.",
        svg: "/image (3).png",
    },
    {
        title: "Onboarding & Employee Portal",
        body: "Well designed onboarding, e-signature, off-boarding workflows with document checklist, offer letter/contract templates and training materials for seamless ramp-up.",
        svg: "/image (4).png",
    },
    {
        title: "Time, Performance & Presence Management",
        body: "World class timesheet and performance management system design and optimized for remote teams.",
        svg: "/image (5).png",
    },
];

const AuthAnimationDisplay = () => {
    const [index, setState] = useState(0);
    console.log(index, slideShow.length);
    useEffect(() => {
        const time = setInterval(() => {
            if (index >= slideShow.length - 1) {
                setState(0);
            } else {
                setState((prev) => prev + 1);
            }
        }, 1600);
        return () => {
            clearInterval(time);
        };
    }, [index]);
    return (
        <div className="flex items-center p-14 justify-center h-screen overflow-hidden">
            <motion.div
                key={index}
                animate={{ y: [-24, 0] }}
                exit={{ y: -24 }}
                className="gap-y-5 flex h-full p-9 flex-col justify-between"
            >
                <h1 className="text-7xl text-center font-bold text-[#CB6015]">
                    {slideShow[index]?.title}
                </h1>
                <div className="flex p-2 space-x-4   items-center">
                    <span className="h-[18rem] flex items-center justify-center min-w-[18rem] rounded-full bg-green-300">
                        <Image
                            className="object-contain"
                            src={slideShow[index]?.svg}
                            alt=""
                            width={200}
                            height={200}
                        />
                    </span>
                    <h1 className="text-2xl text-center text-wrap">
                        {slideShow[index]?.body}
                    </h1>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthAnimationDisplay;
