"use client";
import {
    CheckBox,
    Input,
    InputWrapper,
    ToggleButton,
} from "@/components/ui/Input/Input";
import React, { useCallback, useRef, useState } from "react";
import { LuUsers2 } from "react-icons/lu";

import DragndDropInput from "./DragndDropInput";

import SkillsInput from "./SkillsInput";
import { useRouter } from "next/navigation";
import { experience, otherFields } from "@/lib/utils";
import { useForm, SubmitHandler } from "react-hook-form";
import readFileContent from "@/helpers/writeFille";

interface Inputs {
    jobTitle: string;
    jobDescription: string;
    location: string;
    jobType: string;
    experience: string;
    numberofOpenPosition: number;
    deadLine: string;
    additionalInformation: string;
    skills: string[];
    perksPublic: boolean;
    currency: string;
    frequency: string;
    rate: string;
    otherPerks: string;
}

const validation = {
    required: true,
};
const Form = () => {
    const [nameofFile, setNanmeofFile] = useState<string>("");
    const { push } = useRouter();
    const onDrop = useCallback((acceptedFiles: any) => {
        setNanmeofFile!(acceptedFiles[0].name);
        if (acceptedFiles[0]) {
            const file = new FileReader();
            file.onload = (e) => {
                console.log(e.target?.result?.toString());
            };
            file.readAsText(acceptedFiles[0]);
        }

        console.log(acceptedFiles);
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = (e: any) => {
        console.log(e);
    };
    return (
        <form
            className="my-3 py-4 md:p-2"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="space-y-2">
                <h1 className="text-[0.85rem] text-small-p-mute">
                    This is optional, you can choose to manually fill your job
                    info
                </h1>
                <DragndDropInput
                    nameofFile={nameofFile}
                    onDrop={onDrop as any}
                />
                <div className="py-1 space-y-6">
                    {/* Job Title */}
                    <InputWrapper
                        className="space-y-2"
                        htmlFor="first_name"
                        label="Job title *"
                    >
                        <div className="border border-muted-boder rounded-xl">
                            <Input
                                {...register("jobTitle", { required: true })}
                                placeholder="Senior UI/UX Designer"
                                type="text"
                            />
                        </div>
                    </InputWrapper>
                    {/* Job Description */}
                    <InputWrapper label="Job description" htmlFor="description">
                        <textarea
                            {...register("jobDescription")}
                            className="border p-2  block w-full rounded-lg focus:outline-none focus:border-blue-600"
                        ></textarea>
                    </InputWrapper>
                    {/* Location */}
                    <InputWrapper
                        className="space-y-3 relative"
                        label="Location *"
                    >
                        <div className="border border-muted-boder rounded-xl flex px-2 items-center">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                            </svg>
                            <Input
                                placeholder="Search Location e.g. United State"
                                type="text"
                                {...register("location")}
                            />
                        </div>
                        <label
                            htmlFor="remote"
                            className="group flex items-center space-x-2"
                        >
                            <CheckBox id="remote" />
                            <span className="text-sm">Open For Remote</span>
                        </label>
                    </InputWrapper>
                    {/* Job Type */}
                    <InputWrapper label="Job Type *">
                        <select
                            {...register("jobType")}
                            className="border rounded-lg text-slate-600 text-sm block w-full focus:outline-none p-2"
                        >
                            <option value="">Select frequency</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Biweekly">Biweekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </InputWrapper>
                    {/* Experience Level */}
                    <InputWrapper
                        className="space-y-1"
                        label="Experience Level *"
                    >
                        {experience.map(({ name, value }) => {
                            return (
                                <label
                                    key={name}
                                    htmlFor={name}
                                    className="group text-sm flex items-center space-x-2"
                                >
                                    <CheckBox id={name} />
                                    <span className="text-xs font-medium text-slate-800">
                                        {value}
                                    </span>
                                </label>
                            );
                        })}
                    </InputWrapper>
                    {/* Nubmer of Open Position */}
                    <InputWrapper
                        className="text-xs"
                        label="Number of Open positions"
                    >
                        <div className="border flex rounded-lg items-center px-3">
                            <LuUsers2 className="text-2xl text-slate-600" />
                            <Input
                                {...register("numberofOpenPosition")}
                                className="h-10"
                                type="number"
                                placeholder="1"
                                min="0"
                            />
                        </div>
                    </InputWrapper>
                    {/* Application DeapLine */}
                    <InputWrapper label="Application Deadline *">
                        <div className="border flex rounded-lg items-center">
                            <Input
                                {...register("deadLine")}
                                type="date"
                                className="h-10"
                            />
                        </div>
                    </InputWrapper>
                    {/* Additional Information */}
                    <InputWrapper label="Additional information">
                        <textarea
                            {...register("additionalInformation")}
                            className="w-full block p-3 rounded-lg border focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </InputWrapper>
                    {/* Skills */}
                    <InputWrapper label="Skills *">
                        <SkillsInput />
                    </InputWrapper>
                    <div className="flex gap-2">
                        <ToggleButton />
                        <div className="text-xs text-slate-800 ">
                            <p className="font-medium">Make the perks public</p>
                            <p className="text-[#667085] text-[0.69rem]">
                                Candidates will get to enjoy these benefits when
                                they apply
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full  lg:items-center  gap-4">
                        {/* Currency */}
                        <InputWrapper
                            className="space-y-3 flex flex-col"
                            label="Currency"
                        >
                            <select
                                {...register("currency")}
                                className="block w-full border p-3 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
                            >
                                <option value="NGN">NGN ₦</option>
                                <option value="USD">USD $</option>
                            </select>
                        </InputWrapper>
                        {/* frequency */}
                        <InputWrapper className="space-y-2" label="Frequency">
                            <select className="block w-full border p-3 rounded-lg text-sm focus:border-blue-400 focus:outline-none">
                                <option value="">Select frequency</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Biweekly">Biweekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </InputWrapper>
                        {/* Rate */}
                        <InputWrapper className="space-y-2" label="Rate *">
                            <select
                                {...register("rate")}
                                className="block w-full border p-3 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
                            >
                                <option value="">Select rate</option>
                                <option value="$0 - 500">$0 - 500</option>
                                <option value="$500 - 1000">$500 - 1000</option>
                                <option value="$1000 - 2000">
                                    $1000 - 2000
                                </option>
                                <option value="$2000 - 5000">
                                    $2000 - 5000
                                </option>
                                <option value="$5000 - 15000">
                                    $5000 - 15000
                                </option>
                                <option value="$15000 and above">
                                    $15000 and above
                                </option>
                                <option value="Negotiable">Negotiable</option>
                            </select>
                        </InputWrapper>
                    </div>
                    <div className="space-y-1">
                        {otherFields.map(({ name, value }) => {
                            return (
                                <label
                                    key={name}
                                    htmlFor={name}
                                    className="group text-sm flex items-center space-x-2"
                                >
                                    <CheckBox id={name} />
                                    <span className="text-xs font-medium text-slate-800">
                                        {name}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                    {/* Other Perks */}
                    <InputWrapper className="text-sm" label="Other perks">
                        <div className="w-full">
                            <textarea
                                {...register("otherPerks")}
                                className="border focus:border-blue-600 focus:outline-none rounded-lg p-2 min-w-full"
                            ></textarea>
                        </div>
                    </InputWrapper>
                </div>
                <div>
                    <div className="border-t py-4 flex justify-between items-center my-4 mt-8">
                        <button
                            type="button"
                            className="text-[#344054] border rounded-lg p-3 py-2"
                        >
                            Save to draft
                        </button>
                        <div className="space-x-2">
                            <button
                                onClick={(_) => push("/dashboard/jobs?tab=Active")}
                                type="button"
                                className="border px-3 p-2 text-[#344054] rounded-lg"
                            >
                                Cancel
                            </button>
                            <button className="rounded-lg p-3 bg-blue-600 py-2 text-white font-medium">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
