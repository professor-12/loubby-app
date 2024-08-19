import React, { PropsWithChildren } from "react";

type CardPRops = {
    children: React.ReactNode;
    shadowVariant?: boolean;
};

const Card: React.FC<CardPRops> = ({ children, shadowVariant }) => {
    return (
        <div
            className={`p-[1rem] bg-white rounded-lg ${
                !shadowVariant ? "shadow-[#f2f4f7]" : "shadow"
            }`}
        >
            {children}
        </div>
    );
};

export default Card;
