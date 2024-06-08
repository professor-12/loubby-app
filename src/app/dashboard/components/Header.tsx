"use client";
import React, { useEffect, useState } from "react";
const Header = () => {
    const [user, setUser] = useState(null) as any;

    useEffect(() => {
        setUser(() => JSON.parse(localStorage.getItem("user") as any));
    }, []);

    return (
        <div className="bg-[url('/d.png')] header flex  bg-no-repeat bg-[-79rem]  min-h-[11rem]  overflow-hidden rounded-lg">
            <div className="bg-blue-600/50 w-full flex justify-between flex-col bg-opacity-65 p-6">
                <div className="">
                    <h1 className="md:text-xl font-medium text-white">
                        Good Evening {user?.last_name} !
                    </h1>
                    <p className="text-xs md:text-sm text-white">
                        Welcome to your remote talent hiring dashboard
                    </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap  gap-5 justify-between lg:justify-start items-center">
                    <div className="w-full md:w-auto">
                        <button className="bg-white text-nowrap w-full p-[0.5rem] text-sm font-medium px-3 rounded-lg">
                            Hire Talents
                        </button>
                    </div>
                    <div className="flex md:justify-start gap-3 justify-between px-6 md:px-0 w-full items-center">
                        <p className="text-white text-xs md:text-sm underline">
                            Browse Talent
                        </p>
                        <p className="text-white text-xs md:text-sm underline">
                            {" "}
                            Post a Job
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
