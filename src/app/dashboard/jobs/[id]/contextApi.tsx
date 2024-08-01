"use client";

import React, { createContext, PropsWithChildren } from "react";

const initialStore = {
    active: "",
};
const Store = createContext(initialStore);

const JobDetailProvider = ({ children }: PropsWithChildren) => {
    return <Store.Provider value={{ active: "" }}>{children}</Store.Provider>;
};

export default JobDetailProvider;
