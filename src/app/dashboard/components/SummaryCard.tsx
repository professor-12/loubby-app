import React from "react";
import ThunderSvg from "./ThunderSvg";

const SummaryCard = async ({
    title,
    amount,
    data,
}: {
    data?: any;
    title: string;
    amount: number;
}) => {
    return (
        <div className="white bg-white  space-y-2  md:h-[8rem] flex justify-between items-center  rounded-lg p-3 md:p-4 md:py-5 shadow shadow-slate-200/40">
            <div className="flex gap-2 md:flex-col items-center">
                <button className="bg-blue-100 rounded p-2 w-auto flex">
                    <ThunderSvg />
                </button>
                <h1 className="text-xs text-stone-600">{title}</h1>
            </div>
            <p className="text-2xl font-bold">{amount}</p>
        </div>
    );
};

export default SummaryCard;

{
    /* <div className="white bg-white  space-y-2  h-[8rem]  rounded-lg p-4  py-5 shadow shadow-slate-200/40">
    <button className="bg-blue-100 rounded p-2 w-auto flex">
        <ThunderSvg />
    </button>
    <h1 className="text-xs text-stone-600">New Matches</h1>
    <p className="text-2xl font-bold">0</p>
    {data?.data}
</div>; */
}
