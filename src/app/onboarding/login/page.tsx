"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import Box from "./Box";
import Lock from "./Lock";
import ClosedEye from "./ClosedEye";
import { Form, Input } from "@/components/ui/Input/Input";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface Zod {
    email: string;
    password: string;
}

const Page = () => {
    const [passwordType, setPasswordType] = useState(true);
    const router = useRouter();
    const {
        register,
        handleSubmit,

        formState: { errors, isSubmitting },
    } = useForm<Zod>();

    const toggle = () => {
        setPasswordType((prev) => !prev);
    };
    const submit = async (payload: Zod) => {
        const fetchData = await fetch(
            "https://api.loubby.ai/api/v1/employer/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email.trim(),
                    user_password: payload.password.trim(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!fetchData.ok) {
            const res = await fetchData.json();
            return toast.error(res.message);
        } else if (fetchData.status == 200) {
            const res = await fetchData.json();
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", res.user);
            toast.success("Email verified.. Login Success");
            router.push("/dashboard")
        }
    };
    return (
        <Form onSubmit={handleSubmit(submit)}>
            <div className="space-y-5 px-4">
                <div>
                    <h1 className="text-xl font-medium">Log in</h1>
                    <p className="text-sm text-gray-600">
                        welcome back to Loubby
                    </p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm">
                        Email*
                    </label>
                    <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                        <span>
                            <Box />
                        </span>

                        <Input
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
                            })}
                            name="email"
                            id="email"
                            type="text"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs">
                            Invalid email format, Please provide a valid email
                            address
                        </p>
                    )}
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm">
                        Password*
                    </label>
                    <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                        <span>
                            <Lock />
                        </span>
                        <Input
                            {...register("password", {
                                required: true,
                            })}
                            name="password"
                            id="password"
                            type={!passwordType ? "text" : "password"}
                        />
                        <span onClick={toggle}>
                            <ClosedEye />
                        </span>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-red-500">
                            Required field, Please fill
                        </p>
                    )}
                </div>
                <div className="text-blue-700 text-sm">Forgot Password?</div>
                <button
                    disabled={isSubmitting}
                    className="w-full rounded-xl p-3 text-center text-sm text-white disabled:opacity-55  bg-blue-500"
                >
                    {!isSubmitting ? "Login" : "Please wait.."}
                </button>
                <div className="text-center">
                    <span className="text-center p-2 text-sm">
                        Don&apos;t have an account?{" "}
                        <Link className="text-blue-600" href="create-account">
                            Signup
                        </Link>
                    </span>
                </div>
            </div>
        </Form>
    );
};

export default Page;
