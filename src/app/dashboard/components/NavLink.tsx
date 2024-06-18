"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
    link,
    svg,
    name,
    expand,
}: {
    link: string;
    svg: string;
    name?: string;
    expand?: boolean;
}) => {
    const pathName = usePathname();
    const active =
        (pathName.split("/")[2] || "dashboard") ===
        (link.split("/")[2]?.split("?")[0] || "dashboard");
    const dynamicClassName = expand
        ? `hover:bg-active   rounded ${active && "bg-active"}`
        : `hover:bg-active flex items-center justify-center  rounded ${
              active && "bg-active"
          }`;
    return (
        <li className={dynamicClassName}>
            <div className="p-3 px-5">
                <Link
                    href={link ?? ""}
                    className={` rounded-md flex space-x-4 items-center`}
                >
                    <Image
                        className="min-w-5  min-h-5"
                        src={svg}
                        width={20}
                        height={20}
                        alt=""
                    />

                    {expand && (
                        <p
                            className={`${
                                active && "text-blue-500"
                            } text-[0.85rem] text-slate-600 `}
                        >
                            {name}
                        </p>
                    )}
                </Link>
            </div>
        </li>
    );
};

export default NavLink;
