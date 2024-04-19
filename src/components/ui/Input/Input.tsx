import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}k
            className="bg-transparent text-sm w-full focus:outline-none p-2"
        />
    );
};

