import React from "react";
import { useGetJobListing } from "../ContextApi/Provider";

type StepType = {
    name: string;
    id?: number | string;
    step: number | string;
};

const Steps = ({ steps }: { steps: Array<StepType> }) => {
    return (
        <div className="mx-auto overflow-x-hidden mt-6 xl:w-[75%] container w-full hidden lg:flex">
            <div className="w-full  grid grid-flow-col justify-between border rounded-full p-2">
                {steps.map((item, indx) => {
                    return <Step key={item.id} {...item} index={indx} />;
                })}
            </div>
        </div>
    );
};

export default Steps;

const Step = ({
    name,
    index,
    step,
}: {
    name: String;
    index: number;
    step: string | number;
}) => {
    const { currentStep } = useGetJobListing();
    const active = currentStep == step;
    const stepCompleted =
        (currentStep as number) > (step as number) || currentStep === "done";
    return (
        <div
            className="flex cursor-pointer items-center justify-center  rounded-full"
            key={step}
        >
            <div className={`flex items-center space-x-2`}>
                <span
                    className={`${
                        !active ? "bg-[#F2F4F7]" : "bg-[#eaf3ff]" 
                    }  ${stepCompleted
                        && "bg-blue-700/70 text-white"} text-xs flex   xl:w-6  xl:h-6 w-3 h-3 p-[0.55rem] rounded-full items-center justify-center text-center`}
                >
                    {index + 1}
                </span>
                <p
                    className={`xl:text-sm  ${
                        !active ? "text-neutral-500" : "text-blue-600 text-xs"
                    } text-nowrap`}
                >
                    {name}
                </p>
            </div>
        </div>
    );
};
