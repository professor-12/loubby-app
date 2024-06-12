"use client";
import DropDown, { DropDownChild } from "@/components/DropDownMenu/DropDown";
import { headerLinks } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const HeaderButton = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <button
            onBlur={(e) => {
                e.stopPropagation();
                setOpenModal(false);
            }}
            onClick={(e) => setOpenModal(true)}
            className="relative z-[51]"
        >
            <div
                className="bg-blue-600 h-7 w-7 md:w-8 md:h-8 rounded-lg text-center flex items-center justify-center text-white"
                onClick={(_) => _}
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    id="addDrop"
                    color="#fff"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(255, 255, 255);" }}
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
            </div>
            <div className="z-[100000]" onClick={(e) => e.stopPropagation()}>
                {openModal && (
                    <>
                        <DropDown className="min-w-[15rem]">
                            {headerLinks.map(({ name, img, link }) => {
                                return (
                                    <DropDownChild
                                        key={name}
                                        link={link}
                                        name={name}
                                        svg
                                        img={img}
                                    ></DropDownChild>
                                );
                            })}
                        </DropDown>
                    </>
                )}
            </div>
        </button>
    );
};

export default HeaderButton;
