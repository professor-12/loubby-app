"use client";
import React, { FormHTMLAttributes, HtmlHTMLAttributes } from "react";

const Form = (
    props?: React.FormHTMLAttributes<HTMLFormElement> & {
        children: React.ReactNode;
    }
) => {
    return (
        <form
            {...props}
            className="w-full lg:w-[80%]  container mx-auto px-4"
        >
            {props?.children}
        </form>
    );
};

export default Form;
