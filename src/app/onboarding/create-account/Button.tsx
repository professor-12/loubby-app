"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button: React.FC<{
    children: React.ReactNode;
    link: string;
    className?: string;
}> = (props) => {
    const { push } = useRouter();
    return (
        <div className={props.className} onClick={() => push(props.link)}>
            {props.children}
        </div>
    );
};

export default Button;
