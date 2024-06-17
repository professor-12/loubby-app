"use client";
import React from "react";

import { useSelector } from "react-redux";
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
        <div className="overflow-x-hidden flex">
            <div style={style} className={className}>
                <ActiveTab data={active} />
            </div>
            <div style={style} className={className}>
                <InactiveTab data={inactive} />
            </div>

            <div style={style} className={className}>
                <Draft />
            </div>
        </div>
    );
};

export default Tab;
