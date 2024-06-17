import React from "react";
import Schedule from "./Schedule";
import Button from "@/app/onboarding/create-account/Button";

const ScheduleContainer = ({ data }: { data: Array<any> }) => {
    return (
        <div className="h-full space-y-28 flex flex-col pb-4 justify-between">
            <div className="space-y-5 borders">
                {data?.map((item, idx) => {
                    return <Schedule item={item} key={idx + "schedule"} />;
                })}
            </div>
            <Button
                link=""
                className="w-full font-medium text-blue-800 bg-blue-300/20 cursor-pointer text-center p-2 text-sm rounded-md flex justify-center items-center space-x-2"
            >
                <span>View More Schedule</span>{" "}
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    color="#0047A4"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(0, 71, 164);" }}
                >
                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                </svg>
            </Button>
        </div>
    );
};

export default ScheduleContainer;
