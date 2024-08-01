import Image from "next/image";
import React from "react";
import { JobListCardMore } from "./JobListCardMore";
import { daysBetweenDates } from "@/helpers/getNulberofDays";
import Link from "next/link";

const JobListCard = ({ data }: { data: any }) => {
    const d = daysBetweenDates(data?.createdAt, new Date().toDateString());

    return (
        <div className="bg-white relative p-3 py-6 pb-7 border border-[#eaecf0]  rounded-[0.7rem] md:space-y-3 space-y-1 md:text-sm text-xs shadow-sm">
            <div className="flex justify-between">
                <p className="lg:text-sm text-xs">{data?.jobTitle}</p>
                <JobListCardMore id={data._id} />
            </div>
            <div>
                <p className="lg:text-md text-slate-500">
                    {data?.jobSalary}/{data.jobRate}
                </p>
            </div>
            <div className="space-y-2">
                <span className="text-green-700 text-xs bg-[#ecfdf3] p-1  px-2 rounded-full">
                    Open
                </span>
                <div className="flex space-x-2 text-sm">
                    <Image
                        className="w-5 h-5"
                        src={"/Applicant.svg"}
                        width={200}
                        height={200}
                        alt="ApplicantImage"
                    />
                    <span className="text-neutral-500">
                        <span>{data?.JobApplications.length}</span> applicant
                    </span>
                </div>
                <div className="flex space-x-2 text-sm">
                    <span className="flex p-1 rounded-full bg-neutral-500/10">
                        <Image
                            className="w-3 h-3"
                            src={"/Time.svg"}
                            width={200}
                            height={200}
                            alt="ApplicantImage"
                        />
                    </span>
                    <span className="text-neutral-500">
                        {d == 0
                            ? "Today"
                            : d == 1
                            ? "Yesterday"
                            : `${d} days ago`}{" "}
                    </span>
                </div>
                <div className="p-2 text-[#dc6803] font-medium">0 matches</div>
            </div>
            <button className="text-white  min-h-[1.9rem]  rounded-md w-full bg-blue-600/90">
                <Link
                    className="w-full flex justify-center  lg:p-[0.36rem]  p-[0.35rem]"
                    href={`jobs/${data?._id}`}
                >
                    View
                </Link>
            </button>
        </div>
    );
};

export default JobListCard;
