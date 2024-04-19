"use client";
import React, {
    FormHTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
} from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className="bg-transparent text-sm w-full focus:outline-none p-[0.7rem]"
        />
    );
};

export const Form = (
    props?: FormHTMLAttributes<HTMLFormElement> & {
        children: ReactNode;
    }
) => {
    return (
        <form {...props} className="w-full lg:w-[80%]  container mx-auto px-4">
            {props?.children}
        </form>
    );
};
