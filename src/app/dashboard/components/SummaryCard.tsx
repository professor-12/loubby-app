import React from "react";
import ThunderSvg from "./ThunderSvg";

const SummaryCard = async ({
    title,
    amount,
    bg,
    color,
}: {
    title: string;
    amount: number;
    color?: string;
    bg?: string;
}) => {
    return (
        <div className="white bg-white  flex-1 space-y-2  md:h-[8rem] flex md:flex-col md:justify-start justify-between items-center md:items-start  rounded-lg p-3 md:p-4 md:py-5 shadow shadow-slate-200/40">
            <div className="flex gap-2 md:flex-col md:items-start items-center">
                <button
                    style={{ backgroundColor: bg }}
                    className="bg-blue-100 rounded p-2 w-auto flex"
                >
                    <ThunderSvg color={color} />
                </button>
                <h1 className="text-xs text-small-p-mute text-nowrap">{title}</h1>
            </div>
            <p className="text-2xl font-bold">{amount}</p>
        </div>
    );
};

export default SummaryCard;

