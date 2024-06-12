import React from "react";
import Image from "next/image";
import Button from "@/app/onboarding/create-account/Button";
const EmptyJob = () => {
    return (
        <div className="mx-auto h-[60vh]  my-auto flex flex-col items-center justify-center space-y-3">
            <Image
                src="/latestpost.svg"
                width={170}
                height={200}
                alt="No Jobs Image"
            />
            <div className="text-center text-sm space-y-1">
                <h1 className="font-semibold text-nowrap">
                    You have not created any opening
                </h1>
                <p className="text-small-p-mute text-xs lg:text-sm">
                    Create a job opening to easily find and <br /> manage
                    candidates
                </p>
            </div>
            <Button
                className="bg-blue-500 rounded-md p-1 px-4 space-x-2 text-white"
                link="/dashboard/jobs/joblisting"
            >
                <span className="text-md">+</span>
                <span className="text-sm">Create New</span>
            </Button>
        </div>
    );
};

export default EmptyJob;
