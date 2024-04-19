"use client";

import Link from "next/link";
import React from "react";
import Box from "./Box";
import Lock from "./Lock";
import ClosedEye from "./ClosedEye";
import { Form, Input } from "@/components/ui/Input/Input";
import { loginAction } from "@/actions/loginAction";

const page = () => {
    return (
        <Form action={loginAction}>
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

                        <Input name="email" id="email" type="text" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm">
                        Password*
                    </label>
                    <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                        <span>
                            <Lock />
                        </span>
                        <Input name="password" id="password" type="password" />
                        <span>
                            <ClosedEye />
                        </span>
                    </div>
                </div>
                <div className="text-blue-700 text-sm">Forgot Password?</div>
                <button className="w-full rounded-xl p-3 text-center text-sm text-white  bg-blue-500">
                    Login
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

export default page;
