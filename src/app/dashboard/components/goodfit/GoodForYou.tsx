import Image from "next/image";
import React from "react";
import { RxCaretRight } from "react-icons/rx";

const GoodForYou = () => {
    return (
        <div className="white gap-6 pb-24  flex flex-col min-h-[8rem] bg-white flex-1   rounded-lg p-4 shadow shadow-slate-200/40 space-y-2">
            <div className="flex items-center justify-between w-full">
                <p className="font-medium text-clip">Good fit for you</p>
                <p className="text-neutral-500 flex items-center text-sm space-x-1">
                    <span>Browse talent</span>{" "}
                    <RxCaretRight className="text-blue-500 text-2xl" />
                </p>
            </div>
            <div className="text-center space-y-1">
                <div className="mx-auto w-full flex items-center justify-center">
                    <Image
                        src={"/latestpost.svg"}
                        alt=""
                        width={100}
                        height={500}
                    />
                </div>
                <h1 className="font-semibold">No Matches Yet</h1>
                <p className="text-xs  text-small-p-mute">
                    No candidate matches just yet. Create a job post to use our
                    revolutionary AI matching
                </p>
            </div>
        </div>
    );
};

export default GoodForYou;
