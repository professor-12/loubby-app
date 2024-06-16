import Image from "next/image";
import React from "react";
import { TbPlus } from "react-icons/tb";
import Button from "@/app/onboarding/create-account/Button";

const LatestPost = ({ results }: { results: any }) => {
    if (results?.length == 0 || !results) {
        return (
            <div className="w-full flex flex-col gap-6 items-center justify-center">
                <div className="text-center space-y-1">
                    <div className="mx-auto w-full flex items-center justify-center">
                        <Image
                            src={"/latestpost.svg"}
                            alt=""
                            width={80}
                            height={500}
                        />
                    </div>
                    <h1 className="font-semibold">
                        It All Starts From a Job Post!
                    </h1>
                    <p className="text-xs  text-small-p-mute">
                        Create a job post to easily find and manage candidates
                    </p>
                </div>
                <Button
                    link="dashboard/jobs/joblisting"
                    className="text-cener flex text-white space-x-1 bg-[#1A73E8] p-2 rounded-lg px-4"
                >
                    <TbPlus className="text-xl" />{" "}
                    <span className="text-sm">Post a Job</span>{" "}
                </Button>
            </div>
        );
    }

    return <div>LatestPost</div>;
};

export default LatestPost;
