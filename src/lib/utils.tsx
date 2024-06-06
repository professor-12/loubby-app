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
        link: "",
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
        link: "",
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
        link: "",
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
        link: "",
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
