"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import ScheduleContainer from "./ScheduleContainer";
const UpComingSchedule = () => {
    const { data } = useSelector((state: any) => state.interview);

    return (
        <div className=" bg-white p-4 h-full pb-12  flex-1  rounded-lg  shadow shadow-slate-200/40 w-full space-y-1">
            <p className="font-medium">Upcoming Schedule</p>
            {data?.results.length === 0 ? (
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
                            When you schedule an <br /> interview, it&apos;ll
                            show here
                        </p>
                    </div>
                </div>
            ) : (
                <ScheduleContainer data={data?.results} />
            )}
        </div>
    );
};

export default UpComingSchedule;
