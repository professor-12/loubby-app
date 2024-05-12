import React from "react";

const Steps = () => {
    return (
        <div className="mx-auto overflow-x-hidden mt-6 xl:w-[75%] container w-full hidden lg:flex">
            <div className="w-full  grid grid-flow-col justify-between border rounded-full p-2">
                {new Array(6).fill(null).map((_, i) => {
                    return (
                        <div
                            className="flex cursor-pointer items-center justify-center  rounded-full"
                            key={i}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="text-xs flex  bg-[#F2F4F7]  xl:w-6  xl:h-6 w-3 h-3 p-2 rounded-full items-center justify-center text-center">
                                    {i + 1}
                                </span>
                                <p className="xl:text-sm  text-neutral-500 text-xs text-nowrap">
                                    Job Details
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Steps;
