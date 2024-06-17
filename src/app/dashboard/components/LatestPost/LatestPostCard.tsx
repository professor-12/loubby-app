import Button from "@/app/onboarding/create-account/Button";
import Image from "next/image";
import React from "react";

const LatestPostCard = () => {
    return (
        <div className="space-y-4">
            <h1 className="md:text-sm text-[0.84rem]">Academic Researcher</h1>
            <div className="text-sm space-x-2 text-[#667085] flex items-center">
                <span className="flex gap-1 text-[0.6rem] md:text-[0.75rem]">
                    <Image
                        src={"/db.svg"}
                        width={50}
                        height={50}
                        alt="db"
                        className="h-4 w-4"
                    />
                    <span>Salary not Specified</span>
                </span>
                <span className="flex gap-1 text-[0.6rem] md:text-[0.75rem]">
                    <span>
                        <Image
                            src={"/case.svg"}
                            width={50}
                            height={50}
                            alt="db"
                            className="h-5 w-7"
                        />
                    </span>
                    Contract
                </span>
                <span className="flex gap-1 text-[0.6rem] md:text-[0.75rem]">
                    <span>
                        <Image
                            src={"/Location.svg"}
                            width={50}
                            height={50}
                            alt="db"
                            className="h-5 w-7"
                        />
                    </span>
                    In office
                </span>
            </div>
            <div className="space-y-2">
                <h3 className="md:text-sm text-neutral-800 text-xs">
                    Check your pipeline for recent applicants
                </h3>
                <div
                    className="grid gap-3 grid-cols-4  
md:grid-cols-5"
                >
                    <div className="bg-[#1a73e8] p-[0.31rem]    rounded-md" />
                    <div className="bg-neutral-200 p-[0.31rem]   rounded-md " />
                    <div className="bg-[#eaf3ff] p-[0.31rem]  rounded-md " />
                    <div className="bg-[#eaf3ff] p-[0.31rem]   rounded-md " />
                    <div className="bg-[#eaf3ff] p-[0.31rem] rounded-md" />
                </div>
            </div>
            <div className="flex flex-col border-t-2 pb-6 pt-8 m-2 mt-5 md:flex-row gap-2 md:justify-between">
                <h1>Next step: Interview selected candidates</h1>
                <Button
                    link=""
                    className="bg-blue-600 px-7 p-2 text-nowrap rounded-md text-white text-sm"
                >
                    View Job
                </Button>
            </div>
        </div>
    );
};

export default LatestPostCard;
