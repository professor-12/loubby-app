"use client";
import { Form, Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useRef, useState } from "react";
import Box from "../login/Box";
import { list_of_data } from "@/lib/dialcode";
import ClosedEye from "../login/ClosedEye";
import Link from "next/link";
import OpenEye from "../login/OpenEye";
import { useForm } from "react-hook-form";
import { Format_User_SignUp_Data } from "@/helpers/format_data_user_signup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export interface IField {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    c_password: string;
    check: string;
    code: string;
    phone_no: string;
}
const Page = () => {
    const watch_password = useRef({});
    const [password, setPassword] = useState(!!false);
    const [c_password, setC_passcode] = useState(!!false);
    const router = useRouter();

    const {
        register,
        formState: { errors, isSubmitting },
        watch,
        handleSubmit,
    } = useForm<IField>();
    const check = watch("check");
    watch_password.current = watch("password", "");

    const submit = async (data: IField) => {
        let res;
        const payload = JSON.stringify(Format_User_SignUp_Data(data));
        const response = await fetch(
            "https://api.loubby.ai/api/v1/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload,
            }
        );

        if (!response.ok) {
            const error = await response.json();
            return toast.error(error.message);
        }
        res = await response.json();
        toast.success(res.message);
        return router.push("login");
    };

    return (
        <Form onSubmit={handleSubmit(submit)}>
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
                                className={`border ${
                                    errors.first_name && "border-red-600"
                                } px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
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
                            {errors.first_name && (
                                <span className="text-xs text-red-500">
                                    Field required. Please fill
                                </span>
                            )}
                        </InputWrapper>
                        <InputWrapper htmlFor="last_name" label="Last Name*">
                            <div
                                className={`border ${
                                    errors.last_name && "border-red-600"
                                }  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
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
                            {errors.last_name && (
                                <span className="text-xs text-red-500">
                                    Field required. Please fill
                                </span>
                            )}
                        </InputWrapper>
                    </div>
                    <InputWrapper label="Email*">
                        <div
                            className={`border ${
                                errors.email && "border-blue-600"
                            }  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <Input
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
                                })}
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        {errors.email && (
                            <span className="text-xs text-red-500">
                                Invalid email format, Please provide a valid
                                email address
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper label="Phone Number*">
                        <div
                            className={`border ${
                                errors.phone_no && "border-red-600"
                            }  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
                        >
                            <select
                                {...register("code", { required: true })}
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
                                {...register("phone_no", {
                                    required: true,
                                    minLength: 8,
                                })}
                                placeholder="Enter Phone Number"
                                type="text"
                            />
                        </div>
                        {errors.phone_no && (
                            <span className="text-xs text-red-500">
                                Phone number is not valid
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper label="Password*">
                        <div
                            className={`border ${
                                errors.password && "border-red-600"
                            } px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
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
                        {errors.password && (
                            <span className="text-xs text-red-500">
                                Invalid Password! Should contain upper and
                                lowercase letters and a number.
                            </span>
                        )}
                    </InputWrapper>
                    <InputWrapper label="Confirm Password*">
                        <div
                            className={`border ${
                                errors.c_password && "bg-red-600"
                            }  px-2 flex space-x-1 items-center rounded-lg overflow-hidden`}
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
                        {errors.c_password && (
                            <span className="text-xs text-red-500">
                                Please confirm your password
                            </span>
                        )}
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
