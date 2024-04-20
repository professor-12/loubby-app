"use client";
import React, {
    FormHTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    Ref,
} from "react";

const { forwardRef } = React as any;

export const Input = forwardRef(
    (props: InputHTMLAttributes<HTMLInputElement>, ref: Ref<any>) => {
        return (
            <input
                ref={ref}
                {...props}
                className="bg-transparent text-sm w-full focus:outline-none p-[0.8rem]"
            />
        );
    }
);

export const Form = (
    props?:
        | FormHTMLAttributes<HTMLFormElement>
        | {
              children: ReactNode;
          }
) => {
    return (
        <form
            {...props}
            className="w-full lg:w-[85%] md:w-[65%] sm:w-[60%] container mx-auto px-4"
        >
            {props?.children}
        </form>
    );
};

export const InputWrapper = (
    props: React.LabelHTMLAttributes<HTMLLabelElement> & {
        children?: React.ReactNode;
        label: string;
    }
) => {
    return (
        <div className="space-y-1 flex-1">
            <label
                {...props}
                className="text-sm text-slate-700"
                htmlFor="cpassword"
            >
                {props.label}
            </label>
            {props.children}
        </div>
    );
};
