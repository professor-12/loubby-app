"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetJobListing } from "../ContextApi/Provider";

const FormNavigation = () => {
    const { push } = useRouter();
    const { handledecreaseSteps, currentStep } = useGetJobListing();
    return (
        <div>
            <div className="border-t py-4 flex justify-between items-center my-4 mt-8">
                <button
                    type="button"
                    className="text-[#344054] border rounded-lg p-3 py-2"
                >
                    Save to draft
                </button>
                <div className="space-x-2">
                    {(currentStep as number) <= 1 ? (
                        <button
                            onClick={() => push("/dashboard/jobs?tab=Active")}
                            type="button"
                            className="border px-3 p-2 text-[#344054] rounded-lg"
                        >
                            Cancel
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handledecreaseSteps}
                            className="border px-3 p-2 text-[#344054] rounded-lg"
                        >
                            Previous
                        </button>
                    )}
                    <button className="rounded-lg p-3 bg-blue-600 py-2 text-white font-medium">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormNavigation;
