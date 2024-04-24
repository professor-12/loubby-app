"use client";
import React from "react";
import Box from "./Box";
import Note from "./Note";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    return (
        <div className="container space-y-6  px-4 mx-auto md:w-[60%] xl:w-[80%]">
            <div>
                <h1 className="text-xl font-medium">Create an account</h1>
                <p className="text-sm text-slate-700">
                    Get access to lots of talent and more
                </p>
            </div>
            <div className="space-y-4">
                <div
                    onClick={(_) =>
                        router.push("employer-signup?from=create-account")
                    }
                    className="flex justify-between  w-full border text-slate-800 border-gray-200 p-4 py-6 cursor-pointer rounded-lg"
                >
                    <div className="flex space-x-3">
                        <div>
                            <span className="flex items-center p-2 bg-background-gray justify-center  rounded-full">
                                <Note />
                            </span>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">
                                I am an Employer
                            </h1>
                            <p className="text-sm">
                                I&apos;m looking for skilled <br /> candidates
                                to work for me
                            </p>
                        </div>
                    </div>
                    <div className="w-6 h-6 flex justify-self-end rounded-full border-2" />
                </div>
                <div
                    onClick={(_) => router.push("user-signup?source=signup")}
                    className="flex cursor-pointer justify-between w-full border text-slate-800 border-gray-200 p-4 py-6 rounded-lg"
                >
                    <div className="flex space-x-3">
                        <div className="">
                            <span className="flex items-center bg-background-gray justify-center p-2 rounded-full">
                                <Note />
                            </span>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">
                                I am a job seeker
                            </h1>
                            <p className="text-sm">
                                I have skills and i&apos;m looking for an
                                employer t work for
                            </p>
                        </div>
                    </div>
                    <div className="w-6 h-6 flex justify-self-end rounded-full border-2" />
                </div>
            </div>

            <p className="text-center text-sm text-slate-700">
                Already have an account?{" "}
                <Link className="text-sm text-blue-500" href="login">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Page;
