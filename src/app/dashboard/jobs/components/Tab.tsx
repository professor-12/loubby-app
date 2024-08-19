"use client";
import React from "react";
import ActiveTab from "./ActiveTab";
import InactiveTab from "./InactiveTab";

import Draft from "./Draft";
import { useStoreContext } from "./JobContextapi/store";

const Tab = ({ data }: { data: any }) => {
    const active = data["Active"];
    const inactive = data["Inactive"];
    // const draft = data["Draft"]; comming back to deal with you
    const { x } = useStoreContext();
    const style = {
        transform: `translateX(${x}%)`,
    };
    const className = "w-full transition-all duration-700 shrink-0";
    return (
        <div style={style} className="flex transition-all duration-700">
            <div className={className}>
                <ActiveTab data={active} />
            </div>
            <div className={className}>
                <InactiveTab data={inactive} />
            </div>
            <div className={className}>
                <Draft />
            </div>
        </div>
    );
};

export default Tab;
