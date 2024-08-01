import React from "react";
import Card from "./Card";

const RoleDetail = () => {
    return (
        <Card>
            <div>
                <h3 className="text-sm">Role details</h3>
                <div className="h-[.1px] my-3 bg-slate-200" />
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            color="#175CD3"
                            height="25"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(23, 92, 211)" }}
                        >
                            <path d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2zm0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2-6-1.295-6-2 2.278-2 6-2zM6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2V8.732zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2v-1.268z"></path>
                        </svg>
                        <div className="flex flex-col text-xs gap-1">
                            <span>Salary</span>
                            <span>Not Specified</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            color="#027A48"
                            height="25"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(2, 122, 72)" }}
                        >
                            <rect
                                x="2"
                                y="7"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <div className="flex flex-col text-xs gap-1">
                            <span>Type</span>
                            <span>Full Time</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 576 512"
                            color="#C11574"
                            height="25"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(193, 21, 116)" }}
                        >
                            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                        </svg>

                        <div className="flex flex-col text-xs gap-1">
                            <span>Condition</span>
                            <span>In office</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            color="#C4320A"
                            height="25"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(196, 50, 10)" }}
                        >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                            <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>

                        <div className="flex flex-col text-xs gap-1">
                            <span>Location</span>
                            <span>Nigeria</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            color="#5925DC"
                            height="25"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(89, 37, 220)" }}
                        >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                        </svg>

                        <div className="flex flex-col text-xs gap-1">
                            <span>Posted</span>
                            <span>a day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default RoleDetail;
