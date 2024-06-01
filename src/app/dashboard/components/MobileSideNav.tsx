"use client";
import React from "react";
import { createPortal } from "react-dom";
import SideBar from "./sideBar";
import { motion } from "framer-motion";

const MobileSideNav = (props: any) => {
    return (
        <motion.div className="lg:hidden">
            <motion.div className="z-[1000]">
                <SideBar type="sm" />
            </motion.div>
            <BackDrop onClick={() => props.setOpen(false)} />
        </motion.div>
    );
};

export default MobileSideNav;

export const BackDrop: React.FC<{ onClick(): any }> = ({
    onClick,
}: {
    onClick(): any;
}) => {
    const portalElement = document.getElementById("portal");

    if (!portalElement) {
        console.error("The portal element was not found in the DOM.");
        return <></>;
    }

    return createPortal(
        <motion.div
            animate={{ opacity: [0.5, 1] }}
            exit={{ opacity: 0 }}
            onClick={() => onClick()}
            className="flex fixed justify-center inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-[15px] z-50 cursor-pointer"
        ></motion.div>,
        portalElement
    );
};
