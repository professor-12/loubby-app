import React from "react";
import { useGetJobListing } from "../ContextApi/Provider";

type StepType = {
    name: string;
    id?: number | string;
    step: number | string;
};

const Steps = ({ steps }: { steps: Array<StepType> }) => {
    return (
        <div className="mx-auto  mt-6 xl:w-[75%] container w-full max-lg:hidden">
            <div className="w-full flex justify-between border rounded-full p-2">
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
                    className={`${!active ? "bg-[#F2F4F7]" : "bg-[#eaf3ff]"}  ${
                        stepCompleted && "bg-blue-700/70 text-white"
                    } text-xs max-md:text-[0.4rem] flex   xl:w-6  xl:h-6 w-3 h-3 p-[0.55rem] rounded-full items-center justify-center text-center`}
                >
                    {index + 1}
                </span>
                <p
                    className={`xl:text-sm text-xs   ${
                        !active ? "text-neutral-500" : "text-blue-600"
                    }`}
                >
                    {name}
                </p>
            </div>
        </div>
    );
};
