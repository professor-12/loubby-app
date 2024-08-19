"use client";
import React, { PropsWithChildren} from "react";
import { useJobDetailStore } from "./contextApi";

const SlideWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const { x } = useJobDetailStore();
    return (
       
            <div
                style={{ transform: `translateX(${+x * -100}%)` }}
                className="flex   transition-transform duration-500"
            >
                {children}
            </div>
    );
};

export default SlideWrapper;
