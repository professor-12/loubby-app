"use client";
import { Form, Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useRef } from "react";
import Box from "../login/Box";
import Link from "next/link";
import { list_of_dial_code } from "@/lib/list_of_dial_code";

const page = () => {
    return (
        <Form action={() => {}}>
            <div className="space-y-7 py-12">
                <div className="space-y-1">
                    <h1 className="font-medium">Employer Signup</h1>
                    <p className="text-sm text-slate-700">
                        Create an employer account
                    </p>
                </div>
                <div className="space-y-4">
                    <InputWrapper htmlFor="email" label="Company name*">
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="company_name"
                                placeholder="Enter your company name"
                                id="company_name"
                                type="text"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Email" htmlFor="Email*">
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="email"
                                placeholder="Enter your company Email"
                                id="email"
                                type="email"
                            />
                        </div>
                    </InputWrapper>
                    <div className="md:flex spae-y-4 md:space-y-0 md:gap-2">
                        <InputWrapper label="First name*" htmlFor="first_name">
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    name="first_name"
                                    placeholder="Enter your company name"
                                    id="firstname"
                                    type="text"
                                />
                            </div>
                        </InputWrapper>
                        <InputWrapper
                            label="Last name*"
                            htmlFor="last_name"
                            className="space-y-1 flex-1"
                        >
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    name="email"
                                    placeholder="Enter your company name"
                                    id="lastname"
                                    type="text"
                                />
                            </div>
                        </InputWrapper>
                    </div>
                    <InputWrapper
                        label=" Phone number*"
                        htmlFor="dial_code"
                        className="space-y-1"
                    >
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <select name="dial_code" id="phone_no">
                                {list_of_dial_code.map((code) => (
                                    <option
                                        className="space-x-2"
                                        key={code.name}
                                        value={code.name}
                                    >
                                        {code.name} {code.code}
                                    </option>
                                ))}
                            </select>

                            <Input
                                name="phone_no"
                                placeholder="Enter your Phone Number"
                                id="dial_code"
                                type="tel"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper
                        label="Password*"
                        className="space-y-1 flex-1"
                        htmlFor="password"
                    >
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="password"
                                placeholder="Enter your last name"
                                id="password"
                                type="passwoed"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper htmlFor="cpassword" label="cpassword">
                        <div className="space-y-1 flex-1">
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    name="cpassword"
                                    placeholder="Enter your company name"
                                    id="cpassword"
                                    type="password"
                                />
                            </div>
                        </div>
                    </InputWrapper>

                    <div className="flex space-x-2">
                        <input type="checkbox" />
                        <div className="text-sm text-slate-700">
                            I accept the Loubby{" "}
                            <Link
                                className="text-blue-700 underline"
                                href={"/"}
                            >
                                Terms of Service{" "}
                            </Link>
                            and{" "}
                            <Link
                                className="text-blue-700 underline"
                                href={"/"}
                            >
                                Privacy Policy.
                            </Link>
                        </div>
                    </div>

                    <button
                        disabled
                        className="bg-blue-500 w-full text-center text-white p-3 rounded-lg disabled:opacity-50"
                    >
                        create account
                    </button>
                    <p className="text-sm text-center text-slate-700">
                        Already have an account?{" "}
                        <Link
                            href={"login"}
                            className="text-blue-500 underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </Form>
    );
};

export default page;
