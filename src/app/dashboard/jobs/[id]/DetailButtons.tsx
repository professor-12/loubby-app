"use client";
import React, { PropsWithChildren } from "react";
import { toast } from "react-toastify";

const DetailButtons = () => {
    const writeToClipBoard = async () => {
        try {
            const text = await navigator.clipboard.writeText("Hey");
            return toast.success("Copied to Clipboard!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="space-x-3">
            <CustomButton onClick={writeToClipBoard}>
                <div className="text-sm items-center py-[0.35rem] px-[0.5rem] flex gap-[0.3rem]">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                    </svg>
                    <span className="text-xs">Copy Link</span>
                </div>
            </CustomButton>
            <CustomButton onClick={writeToClipBoard}>
                <div className="text-sm items-center py-[0.35rem] px-[0.5rem] flex gap-[0.3rem]">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    <span className="text-xs">Share</span>
                </div>
            </CustomButton>
            <CustomButton onClick={writeToClipBoard}>
                <div className="text-sm items-center py-[0.35rem] px-[0.5rem] flex gap-[0.3rem]">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                    <span className="text-xs">Edit</span>
                </div>
            </CustomButton>
        </div>
    );
};

export default DetailButtons;

export const CustomButton = ({ children, onClick }: any) => {
    return (
        <button
            onClick={onClick}
            className="border border-[#d0d5dd] p-1 px-2 rounded-lg"
        >
            {children}
        </button>
    );
};
