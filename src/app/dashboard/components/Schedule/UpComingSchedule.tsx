"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Schedule from "./Schedule";
const UpComingSchedule = () => {
    const { data } = useSelector((state: any) => state.interview);
    if (data?.results.length === 0) {
        return (
            <div className="my-12 py-8">
                <div className="text-center space-y-1">
                    <div className="mx-auto p-3 px-7 w-full flex items-center justify-center">
                        <Image
                            src={"/latestpost.svg"}
                            alt=""
                            width={145}
                            height={230}
                        />
                    </div>
                    <h1 className="font-semibold">No recent schedule</h1>
                    <p className="text-xs  text-small-p-mute">
                        When you schedule an <br /> interview, it&apos;ll show
                        here
                    </p>
                </div>
            </div>
        );
    }

    return <Schedule />;
};

export default UpComingSchedule;
