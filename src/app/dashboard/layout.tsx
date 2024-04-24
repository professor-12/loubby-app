import React, { ReactNode } from "react";

export const metadata = {
    title: "dasboard",
};

const layout = ({ children }: { children: ReactNode }) => {
    return <main>{children}</main>;
};

export default layout;
