import React, { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="p-[1rem] bg-white rounded-lg shadow">{children}</div>
    );
};

export default Card;
