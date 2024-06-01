import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const experience = [
        { name: "entry", value: "Entery Level" },
        { name: "junior", value: "Junior Level" },
        { name: "middle", value: "Middle Level" },
        { name: "Senior", value: "Senior Level" },
        { name: "director", value: "Director Level" },
        { name: "vp", value: "VP and above" },
] as const;
    

export   const otherFields = [
        { name: "Bonus target", value: "bonus" },
        { name: "401K", value: "401K" },
        { name: "Vision insurance", value: "Vision insurance" },
        { name: "Medical insurance", value: "Medical insurance" },
        { name: "Disability insurance", value: "insurance" },
        { name: "Dental insurance", value: "Stock options" },
        { name: "Stock options", value: "Stock insurance" },
    ] as const;
