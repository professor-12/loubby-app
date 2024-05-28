"use client";
import React, {
    FormHTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    Ref,
    useRef,
    useState,
} from "react";

const { forwardRef } = React as any;

import { ImCheckboxChecked } from "react-icons/im";

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
            method="post"
            {...props}
            className="w-full lg:w-[85%] md:w-[65%] sm:w-[60%] container mx-auto px-4"
        >
            {props?.children}
        </form>
    );
};

interface CustomInputWrapper
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
    label: string;
    className?: string;
}
export const InputWrapper = (props: CustomInputWrapper) => {
    return (
        <div className={`${props?.className} space-y-1 flex-1`}>
            <label {...props} className="text-sm text-slate-700">
                {props.label}
            </label>
            {props.children}
        </div>
    );
};

export const CheckBox = (
    props: React.HTMLAttributes<HTMLInputElement> & { name?: string }
) => {
    const [checked, setChecked] = useState(false);
    return (
        <label htmlFor="check" className="flex">
            <div className="border border-muted-border rounded-md w-6 h-6 hover:bg-[#cccccc] overflow-hidden cursor-pointer relative">
                {checked && <ImCheckboxChecked className="text-blue-500 w-" />}
                <input
                    id="check"
                    onChange={(e) => setChecked(e.target.checked)}
                    {...props}
                    type="checkbox"
                    className="w-full h-full bg-transparent border-none outline-none checkbox cursor-pointer"
                />
            </div>
            <h1>{props?.name}</h1>
        </label>
    );
};
