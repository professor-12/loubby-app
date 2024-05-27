import React from "react";
import { useDropzone } from "react-dropzone";

const DragndDropInput = ({ onDrop }: { onDrop(): any }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [],
            "application/msword": [],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                [],
            "text/plain": [],
        },
    });
    return (
        <div
            className="flex flex-col gap-3 border border-muted-border rounded-lg p-4 items-center justify-center cursor-pointer"
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <svg
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#BAD8FF"
                />
                <g clip-path="url(#clip0_7172_23312)">
                    <path
                        d="M20.6676 20.6665L18.001 17.9998M18.001 17.9998L15.3343 20.6665M18.001 17.9998V23.9998M23.5943 22.2598C24.2445 21.9053 24.7582 21.3444 25.0542 20.6656C25.3502 19.9867 25.4118 19.2286 25.2291 18.511C25.0464 17.7933 24.6299 17.1568 24.0454 16.7021C23.4609 16.2474 22.7415 16.0003 22.001 15.9998H21.161C20.9592 15.2193 20.5831 14.4947 20.0609 13.8805C19.5388 13.2663 18.8842 12.7784 18.1463 12.4536C17.4085 12.1287 16.6067 11.9754 15.801 12.0051C14.9954 12.0348 14.207 12.2467 13.4951 12.6249C12.7831 13.0032 12.1662 13.5379 11.6907 14.1889C11.2152 14.8399 10.8934 15.5902 10.7496 16.3834C10.6058 17.1767 10.6437 17.9922 10.8604 18.7687C11.0772 19.5452 11.4671 20.2624 12.001 20.8665"
                        stroke="#1A73E8"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#EAF3FF"
                    strokeWidth="4"
                />
                <defs>
                    <clipPath id="clip0_7172_23312">
                        <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(10 10)"
                        />
                    </clipPath>
                </defs>
            </svg>
            <div className="w-full text-center space-y-1">
                <div className="text-center space-x-1">
                    <a className="text-blue-700 md:text-sm text-[0.65rem] font-semibold">
                        click to upload job details
                    </a>
                    <span className="text-[0.7rem] md:text-sm font-medium text-small-p-mute">
                        or drag and drop doc,docx,pdf
                    </span>
                </div>
                <span className="text-[#1a73e8] md:text-sm text-center text-[0.65rem] font-semibold">
                    auto-fill form by uploading document
                </span>
            </div>
        </div>
    );
};

export default DragndDropInput;
