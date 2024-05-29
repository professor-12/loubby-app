"use client";
import { CheckBox, Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useCallback, useRef, useState } from "react";
import { LuUsers2 } from "react-icons/lu";

import DragndDropInput from "./DragndDropInput";
import dynamic from "next/dynamic";
import { list_of_data } from "@/lib/dialcode";
import Tiptap from "./MdEditor";

const MarkdownEditor = dynamic(() => import("./MdEditor"), { ssr: false });

const Form = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
    }, []);

    const ref = useRef() as any;

    const DropDownValue = list_of_data.filter(
        ({ value }) => value.includes(ref?.current?.target?.value) || true
    );

    const experience = [
        { name: "entry", value: "Entery Level" },
        { name: "junior", value: "Junior Level" },
        { name: "middle", value: "Middle Level" },
        { name: "Senior", value: "Senior Level" },
        { name: "director", value: "Director Level" },
        { name: "vp", value: "VP and above" },
    ] as const;

    return (
        <form className="my-3 py-4 md:p-2">
            <div className="space-y-2">
                <h1 className="text-[0.85rem] text-small-p-mute">
                    This is optional, you can choose to manually fill your job
                    info
                </h1>
                <DragndDropInput onDrop={onDrop as any} />
                <div className="py-1 space-y-6">
                    <InputWrapper
                        className="space-y-2"
                        htmlFor="first_name"
                        label="Job title *"
                    >
                        <div className="border border-muted-boder rounded-xl">
                            <Input
                                placeholder="Senior UI/UX Designer"
                                type="text"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Description" htmlFor="description">
                        <Tiptap />
                    </InputWrapper>

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
                    <InputWrapper label="Job Type *">
                        <select
                            name=""
                            id=""
                            className="border rounded-lg text-slate-600 text-sm block w-full focus:outline-none p-2"
                        >
                            <option value="" className="text-black">
                                Select an Option
                            </option>
                            <option value="" className="text-black">
                                Full Time
                            </option>
                            <option value="" className="text-black">
                                Part Time
                            </option>
                            <option value="" className="text-black">
                                Contract
                            </option>
                            <option value="" className="text-black">
                                Internship
                            </option>
                        </select>
                    </InputWrapper>
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
                    <InputWrapper
                        className="text-xs"
                        label="Number of Open positions"
                    >
                        <div className="border flex rounded-lg items-center px-3">
                            <LuUsers2 className="text-2xl text-slate-600" />
                            <Input
                                className="h-10"
                                type="number"
                                placeholder="1"
                                min="0"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Application Deadline *">
                        <div className="border flex rounded-lg items-center">
                            <Input type="date" className="h-12" />
                        </div>
                    </InputWrapper>
                </div>
            </div>
        </form>
    );
};

export default Form;
