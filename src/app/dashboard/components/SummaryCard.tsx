import React from "react";
import ThunderSvg from "./ThunderSvg";

const SummaryCard = async ({ data }: { data: any }) => {
    return (
        <div className="white bg-white  space-y-2  h-[8rem]  rounded-lg p-4  py-5 shadow shadow-slate-200/40">
            <button className="bg-blue-100 rounded p-2 w-auto flex">
                <ThunderSvg />
            </button>
            <h1 className="text-xs text-stone-600">{data?.title}</h1>
            <p className="text-2xl font-bold">0</p>
            {data?.data}
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
