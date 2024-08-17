import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return <section className="overflow-y-auto pb-12">{children}</section>;
};

export default layout;
