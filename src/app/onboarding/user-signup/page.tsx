"use client";
import { Form, Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useRef, useState } from "react";
import Box from "../login/Box";
import { list_of_data } from "@/lib/dialcode";
import ClosedEye from "../login/ClosedEye";
import Link from "next/link";
import OpenEye from "../login/OpenEye";
import { useForm } from "react-hook-form";

interface IField {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    c_password: string;
    check: string;
}
const Page = () => {
    const watch_password = useRef({});
    const [password, setPassword] = useState(!!false);
    const [c_password, setC_passcode] = useState(!!false);

    const {
        register,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<IField>();
    const check = watch("check");
    watch_password.current = watch("password", "");
    return (
        <Form>
            <div className="space-y-7 md:px-4">
                <div className="space-y-1">
                    <h1 className="font-medium">Candidate Signup</h1>
                    <p className="text-sm text-slate-700">
                        Create an job seeker account
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-2">
                        <InputWrapper htmlFor="first_name" label="First Name*">
                            <div
                                className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                            >
                                <span>
                                    <Box />
                                </span>
                                <Input
                                    {...register("first_name", {
                                        required: true,
                                    })}
                                    placeholder="Enter first name"
                                    type="text"
                                />
                            </div>
                        </InputWrapper>
                        <InputWrapper htmlFor="last_name" label="Last Name*">
                            <div
                                className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                            >
                                <span>
                                    <Box />
                                </span>
                                <Input
                                    {...register("last_name", {
                                        required: true,
                                        validate: (thi) =>
                                            thi.trim().length != 0,
                                    })}
                                    placeholder="Enter last name"
                                    type="text"
                                />
                            </div>
                        </InputWrapper>
                    </div>
                    <InputWrapper label="Email*">
                        <div
                            className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <Input
                                {...register("email", {
                                    required: true,
                                    pattern: /p/,
                                })}
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Phone Number*">
                        <div
                            className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <select
                                name="dial_code"
                                className="focus:outline-none"
                                id="phone_no"
                            >
                                {list_of_data.map((code) => (
                                    <option
                                        className="focus:outline-none"
                                        key={code.value}
                                        value={
                                            code.value +
                                            "_" +
                                            code.flag +
                                            "_" +
                                            code.dial_code
                                        }
                                    >
                                        {code.flag} {code.dial_code}
                                    </option>
                                ))}
                            </select>
                            <Input
                                placeholder="Enter Phone Number"
                                type="text"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Password*">
                        <div
                            className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <Input
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                                })}
                                placeholder="Enter password"
                                type={!password ? "password" : "text"}
                            />
                            <span onClick={() => setPassword((_) => !_)}>
                                {password ? <OpenEye /> : <ClosedEye />}
                            </span>
                        </div>
                    </InputWrapper>
                    <InputWrapper label="Confirm Password*">
                        <div
                            className={`border  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <Input
                                {...register("c_password", {
                                    minLength: 8,
                                    required: true,
                                    validate: (value) =>
                                        value == watch_password.current,
                                })}
                                placeholder="Confirm password"
                                type={!c_password ? "password" : "text"}
                            />
                            <span onClick={() => setC_passcode((_) => !_)}>
                                {c_password ? <OpenEye /> : <ClosedEye />}
                            </span>
                        </div>
                    </InputWrapper>
                    <div className="flex space-x-2">
                        <input type="checkbox" {...register("check")} />
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
                        disabled={!check || isSubmitting}
                        className="p-3 disabled:bg-opacity-55 bg-blue-500 hover:bg-blue-600 duration-700 text-center text-white w-full rounded-lg"
                    >
                        {!isSubmitting ? "create account" : "please wait.."}
                    </button>
                </div>
            </div>
        </Form>
    );
};

export default Page;
