"use client";
import React, {
    FormHTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    Ref,
    useRef,
    useState,
} from "react";
import { motion } from "framer-motion";

const { forwardRef } = React as any;

import { ImCheckboxChecked } from "react-icons/im";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> =
    forwardRef(
        (props: InputHTMLAttributes<HTMLInputElement>, ref: Ref<any>) => {
            return (
                <input
                    ref={ref}
                    {...props}
                    className={`${props?.className} bg-transparent text-sm w-full focus:outline-none p-[0.8rem]`}
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
        <div
            className={` ${
                !checked && "border flex border-muted-border"
            } rounded-md w-[1.4rem] h-[1.4rem] group-hover:bg-[#cccccc] overflow-hidden cursor-pointer relative`}
        >
            {checked && (
                <ImCheckboxChecked className="text-blue-500 w-full h-full z-[12] bg-white" />
            )}
            <input
                onChange={(e) => setChecked(e.target.checked)}
                {...props}
                type="checkbox"
                className="w-full absolute inset-0 h-full bg-transparent z-[13] border-none outline-none checkbox cursor-pointer"
            />
            <h1>{props?.name}</h1>
        </div>
    );
};

export const ToggleButton = () => {
    const [checked, setChecked] = useState(false);
    console.log(checked)
    return (
        <motion.div
            onClick={(e) => setChecked((e) => !e)}
            animate={{ backgroundColor: checked ? "#1a73e8" : "#cccc", transition: { duration: .2 } }}
            className={`w-[2.6rem] h-[1.3rem] duration-500  rounded-full flex bg-[#cccc] cursor-pointer`}
        >
            <motion.div animate={{translateX: checked ? "1.2rem" : "0rem" , transition: {duration:.3} }}    className={`h-full border w-[1.4rem] bg-white rounded-full`} />
        </motion.div>
    );
};

// const ToogleButton = () => {
//     const [open, close] = useState(false);

//     return <div className="flex items-center "><span className="bg-blue-600"/></div>;
// };
