"use client";
import { Form, Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "../login/Box";
import Link from "next/link";
import { list_of_dial_code } from "@/lib/list_of_dial_code";

type InputType = {
    company_name: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_no: string;
    password: string;
    cpassword: string;
    check: boolean;
};
const Page = () => {
    const password = React.useRef({});
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputType>();
    const check = watch("check");
    password.current = watch("password", "");

    const submit: SubmitHandler<InputType> = (data) => {
        console.log(data);
    };

    const error_message = {
        password:
            "Invalid Password! Should contain upper and lowercase letters and a number.",
        required: "Required field, Please fill",
        email: "Invalid email format, Please provide a valid email address",
        phone_no: "Phone number is not valid",
        confirm_password: "Please confirm your password",
    };
    return (
        <Form onSubmit={handleSubmit(submit)}>
            <div className="space-y-7 py-12">
                <div className="space-y-1">
                    <h1 className="font-medium">Employer Signup</h1>
                    <p className="text-sm text-slate-700">
                        Create an employer account
                    </p>
                </div>
                <div className="space-y-4">
                    <InputWrapper htmlFor="company_name" label="Company name*">
                        <div
                            className={`border ${
                                errors.company_name && "border-red-600"
                            } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                        >
                            <span>
                                <Box />
                            </span>
                            <Input
                                {...register("company_name", {
                                    required: true,
                                })}
                                placeholder="Enter your company name"
                                type="text"
                            />
                        </div>
                        {errors.company_name && (
                            <span className="text-xs text-red-500">
                                {error_message?.required}
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper label="Email" htmlFor="Email*">
                        <div
                            className={`border ${
                                errors.email && "border-red-600"
                            } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                        >
                            <span>
                                <Box />
                            </span>

                            <Input
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
                                })}
                                placeholder="Enter your company Email"
                                type="email"
                            />
                        </div>
                        {errors.email && (
                            <span className="text-xs text-red-500">
                                {error_message?.email}
                            </span>
                        )}
                    </InputWrapper>
                    <div className="md:flex spae-y-4 md:space-y-0 md:gap-2">
                        <InputWrapper label="First name*" htmlFor="first_name">
                            <div
                                className={`border ${
                                    errors.first_name && "border-red-600"
                                } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                            >
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    {...register("first_name", {
                                        required: true,
                                    })}
                                    placeholder="Enter your company name"
                                    type="text"
                                />
                            </div>
                            {errors.first_name && (
                                <span className="text-xs text-red-500">
                                    {error_message?.required}
                                </span>
                            )}
                        </InputWrapper>
                        <InputWrapper
                            label="Last name*"
                            htmlFor="last_name"
                            className="space-y-1 flex-1"
                        >
                            <div
                                className={`border ${
                                    errors.last_name && "border-red-600"
                                } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                            >
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    {...register("last_name", {
                                        required: true,
                                    })}
                                    placeholder="Enter your company name"
                                    type="text"
                                />
                            </div>
                            {errors.last_name && (
                                <span className="text-xs text-red-500">
                                    {error_message?.required}
                                </span>
                            )}
                        </InputWrapper>
                    </div>
                    <InputWrapper
                        label=" Phone number*"
                        htmlFor="dial_code"
                        className="space-y-1"
                    >
                        <div
                            className={`border ${
                                errors.phone_no && "border-red-600"
                            } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                        >
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
                                {...register("phone_no", {
                                    required: true,
                                    minLength: 8,
                                })}
                                placeholder="Enter your Phone Number"
                                type="tel"
                            />
                        </div>
                        {errors.phone_no && (
                            <span className="text-xs text-red-500">
                                {error_message?.phone_no}
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper
                        label="Password*"
                        className="space-y-1 flex-1"
                        htmlFor="password"
                    >
                        <div
                            className={`border ${
                                errors.password && "border-red-600"
                            } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                        >
                            <span>
                                <Box />
                            </span>

                            <Input
                                {...register("password", {
                                    required: true,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                                    minLength: 4,
                                })}
                                placeholder="Enter your last name"
                                type="password"
                            />
                        </div>
                        {errors.password && (
                            <span className="text-xs text-red-500">
                                {error_message?.password}
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper htmlFor="cpassword" label="Confirm password*">
                        <div className="space-y-1 flex-1">
                            <div
                                className={`border ${
                                    errors.cpassword && "border-red-600"
                                } px-2 flex space-x-1 items-center rounded-md overflow-hidden`}
                            >
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    {...register("cpassword", {
                                        required: true,
                                        validate: (value) =>
                                            value === password.current ||
                                            "The passwords do not match",
                                    })}
                                    placeholder="Enter your company name"
                                    type="password"
                                />
                            </div>
                        </div>
                        {errors.cpassword && (
                            <span className="text-xs text-red-500">
                                {error_message?.confirm_password}
                            </span>
                        )}
                    </InputWrapper>

                    <div className="flex space-x-2">
                        <input {...register("check")} type="checkbox" />
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
                        disabled={!check}
                        type="submit"
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

export default Page;
