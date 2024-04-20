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
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputType>();

    const submit: SubmitHandler<InputType> = (data) => {
        console.log(data);
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
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
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
                    </InputWrapper>
                    <InputWrapper label="Email" htmlFor="Email*">
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                {...{
                                    ...register("email", {
                                        required: true,
                                        pattern: /@/,
                                    }),
                                }}
                                placeholder="Enter your company Email"
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
                                    {...register("first_name", {
                                        required: true,
                                    })}
                                    placeholder="Enter your company name"
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
                                    {...register("last_name", {
                                        required: true,
                                    })}
                                    placeholder="Enter your company name"
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
                                {...register("phone_no", {
                                    required: true,
                                    minLength: 8,
                                })}
                                placeholder="Enter your Phone Number"
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
                                {...register("password", { required: true })}
                                placeholder="Enter your last name"
                                type="passwoed"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper htmlFor="cpassword" label="Confirm password*">
                        <div className="space-y-1 flex-1">
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    {...register("cpassword", {
                                        required: true,
                                    })}
                                    placeholder="Enter your company name"
                                    type="password"
                                />
                            </div>
                        </div>
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
                        type="submit"
                        disabled={false}
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
