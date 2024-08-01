import React from "react";
import Card from "./Card";
import RoleDetail from "./RoleDetail";

const JobDetail = () => {
    return (
        <div className="py-[2.5rem] pb-[14rem] md:gap-[2rem] flex px-[1.5rem]">
            <div className="flex-[2] space-y-4">
                <div className="space-y-2">
                    <h1 className="text-xl">
                        Registrar and Secretary to Council
                    </h1>
                    <div className="flex space-x-2">
                        <p className="flex items-center space-x-2  text-[#667085] text-sm">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                color="#667085"
                                height="18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "rgb(102, 112, 133)" }}
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                                <circle cx="12" cy="9" r="2.5"></circle>
                            </svg>
                            <span>Nigeria</span>
                        </p>
                        <p className="flex  space-x-2  text-[#667085]  items-center text-sm">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                color="#667085"
                                height="18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "rgb(102, 112, 133)" }}
                            >
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                            </svg>
                            <span>a day ago</span>
                        </p>
                    </div>
                </div>
                <div className="space-y-3">
                    <Card>
                        <p className="text-[#667085] text-sm text-wrap leading-5">
                            {P}
                        </p>
                    </Card>
                    <Card>
                        <p className="font-semibold">Perks</p>
                    </Card>
                    <Card>
                        <div className="">
                            <h3 className="text-sm">Skills Required</h3>
                            <p className="inline-block text-xs ml-3">
                                Admins...
                            </p>
                            <p className="inline-block text-xs ml-3">
                                Regulat...
                            </p>
                            <p className="inline-block text-xs ml-3">
                                Communi...
                            </p>
                            <p className="inline-block text-xs ml-3">
                                Organiz...
                            </p>
                            <p className="inline-block text-xs ml-3">
                                Atent...
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="">
                            <h3 className="text-sm">Additional Information</h3>
                            <p className="text-xs">Interview Stages</p>
                            <ul className="text-xs list-disc list-inside text-[#667085] px-4">
                                <li className="">Phone interview</li>
                                <li> First round</li>
                                <li>Hiring manager</li>
                            </ul>
                        </div>
                    </Card>
                    <Card>
                        <p className="text-[#667085] text-sm text-wrap leading-8">
                            There will be 1 interview(s), the number of open
                            position(s) is 1. Remote: no
                        </p>
                    </Card>
                </div>
            </div>
            <div className="flex-1">
                <RoleDetail />
            </div>
        </div>
    );
};



export default JobDetail;

export const P = `OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE, NIGERIA

2023 ADMISSION SCREENING EXERCISE

(FOR UTME AND DIRECT ENTRY CANDIDATES)

Candidates who made Obafemi Awolowo University, Ile-Ife, their first choice in the 2023 UTME and scored 200 and above, and those who applied for Direct Entry (DE) are hereby informed that Registration for the 2023 Post-Unified Tertiary Matriculation Examination (PUTME) screening exercise will commence on Monday, 14th August and end on Monday, 11th September, 2023.

Candidates are required to go through the following processes:

Step 1: Visit admissions.oauife.edu.ng

Step 2: Log on to the site with your Registration Number as Username and your Surname as Password.

Step 3: Fill the biodata form and click continue.

Step 4: Obtain an RRR (Remita Retrieval Reference) from this site only, and use it to make payment online or at any commercial bank.

Step 5: Once payment is accepted, the system logs out and you can now login again.

The screening exercise will be conducted online.

Applicants that provide false information, or upload incorrect credentials will automatically be disqualified.

Candidates are required to check their screening schedule on the OAU admissions Portal from Tuesday 12th September to Saturday 23rd September, 2023.

Candidates will also be required to participate in the Post-UTME screening on their allotted dates and time from 25th September to 28th September, 2023.

Applicants should note that the PUTME-Screening fee is two thousand naira (N2,000.00) only, (Excluding Portal Access Charges).

All enquiries should be forwarded to enquiry@oauife.edu.ng.

SIGNED

Kamardeen Adetunji BAKARE

Registrar and Secretary to Council`;
