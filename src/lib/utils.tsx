import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const experience = [
    { name: "entry", value: "Entery Level" },
    { name: "junior", value: "Junior Level" },
    { name: "middle", value: "Middle Level" },
    { name: "Senior", value: "Senior Level" },
    { name: "director", value: "Director Level" },
    { name: "vp", value: "VP and above" },
] as const;

export const otherFields = [
    { name: "Bonus target", value: "bonus" },
    { name: "401K", value: "401K" },
    { name: "Vision insurance", value: "Vision insurance" },
    { name: "Medical insurance", value: "Medical insurance" },
    { name: "Disability insurance", value: "insurance" },
    { name: "Dental insurance", value: "Stock options" },
    { name: "Stock options", value: "Stock insurance" },
] as const;

export const headerLinks = [
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#5925DC"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(89, 37, 220);" }}
            >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
                <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
            </svg>
        ),
        name: "Add Profile Detail",
        link: "/dashboard/profile/candidatesDetails",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#B42318"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(180, 35, 24)" }}
            >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path>
            </svg>
        ),
        name: "Add Job",
        link: "/dashboard/jobs/joblisting",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                color="#175CD3"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(23, 92, 211)" }}
            >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"></path>
            </svg>
        ),
        name: "Add Schedule",
        link: "/dashboard/schedule",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                color="#C11574"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(193, 21, 116);" }}
            >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
            </svg>
        ),
        name: "Add Talent Pool",
        link: "/dashboard/talent-pool/create",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                color="#B42318"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: " rgb(180, 35, 24);" }}
            >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
            </svg>
        ),
        name: "Add Score Template",
        link: "/dashboard/settings/templates/scorecard?state=create",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#175CD3"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(23, 92, 211)" }}
            >
                <path
                    fill="none"
                    stroke-width="2"
                    d="M9,18 L9,12 M12,18 L12,13 M15,18 L15,10 M17,3 L21,3 L21,23 L3,23 L3,3 L7,3 M7,1 L17,1 L17,5 L7,5 L7,1 Z"
                ></path>
            </svg>
        ),
        name: "Create conversation",
        link: "",
    },
] as const;

export const ProfileLinks = [
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#5925DC"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: " rgb(89, 37, 220);" }}
            >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
        ),
        name: "Account",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#175CD3"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(23, 92, 211);" }}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    fill="currentColor"
                ></path>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        name: "Company profile",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#5925DC"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(89, 37, 220);" }}
            >
                <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
            </svg>
        ),
        name: "Team",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                color="#B42318"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(180, 35, 24);" }}
            >
                <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
            </svg>
        ),
        name: "Invite colleagues",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#175CD3"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(23, 92, 211);" }}
            >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
        ),
        name: "Support & Feedback",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#5925DC"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(89, 37, 220);" }}
            >
                <path d="M424 134.5h-45.8c2.3-6.6 3.8-13.9 3.8-21.3 0-35.4-28.1-63.2-63-63.2-22.1 0-41.2 10.7-52.5 28L256 92.3l-10.5-14.5C234.2 60.7 215.1 48 193 48c-34.9 0-63 29.8-63 65.2 0 7.5 1.5 14.7 3.8 21.3H88c-23.3 0-41.8 19-41.8 42.7L46 421.8c0 23.7 17.4 42.2 40.7 42.2h336.7c23.3 0 42.7-18.5 42.7-42.2V177.2c-.1-23.7-18.8-42.7-42.1-42.7zM320 91c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zm-128 0c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zM88 177.2h106.7L151 237.5l34 25 50-69.1.2-.2-.2 228.6H88V177.2zm336 244.6H277V193.4l50 69.1 34-25-43.7-60.4H424v244.7z"></path>
            </svg>
        ),
        name: "Refer a company",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#B42318"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(180, 35, 24);" }}
            >
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                ></path>
            </svg>
        ),
        name: "Settings",
        link: "",
    },
    {
        img: (
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#5925DC"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(89, 37, 220);" }}
            >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
            </svg>
        ),
        name: "Log out",
        link: "",
    },
] as const;


