"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname , useRouter } from "next/navigation";
import React from "react";

const NavLink = ({
    link,
    svg,
    name,
    setOpen
}: {
    link: string;
    svg: string;
    name?: string;
    setOpen: any;
}) => {
    const pathName = usePathname();
    const router = useRouter()
    const active =
        (pathName.split("/")[2] || "dashboard") ===
        (link.split("/")[2]?.split("?")[0] || "dashboard");
    return (
        <li className={`hover:bg-active  rounded ${active && "bg-active"}`}>
            <div className="p-3 px-5">
                <div
                    onClick={()=> {
                        router.push(link ?? "")
                        setOpen(false)
                    }}
                    
                    className={` rounded-md flex space-x-4 items-center`}
                >
                    <span className="">
                        <Image src={svg} width={20} height={20} alt="" />
                    </span>
                    <p
                        className={`${
                            active && "text-blue-500"
                        } text-[0.85rem] text-slate-600 `}
                    >
                        {name}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default NavLink;
