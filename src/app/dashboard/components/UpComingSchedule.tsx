import Image from "next/image";
import React from "react";
const UpComingSchedule = () => {
    return (
        <div className="white bg-white p-4  flex-1   rounded-lg  shadow shadow-slate-200/40">
            <p className="font-medium">Upcoming Schedule</p>
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
                    <p className="text-xs  text-slate-700">
                        When you schedule an <br /> interview, it&apos;ll show
                        here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UpComingSchedule;
