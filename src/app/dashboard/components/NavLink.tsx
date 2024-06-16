"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
    link,
    svg,
    name,
}: {
    link: string;
    svg: string;
    name?: string;
}) => {
    const pathName = usePathname();
    const active =
        (pathName.split("/")[2] || "dashboard") ===
        (link.split("/")[2]?.split("?")[0] || "dashboard");
    return (
        <li className={`hover:bg-active  rounded ${active && "bg-active"}`}>
            <div className="p-3 px-5">
                <Link
                    href={link ?? ""}
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
                </Link>
            </div>
        </li>
    );
};

export default NavLink;
