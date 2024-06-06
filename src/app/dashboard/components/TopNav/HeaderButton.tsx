"use client";
import DropDown, { DropDownChild } from "@/components/DropDownMenu/DropDown";
import { headerLinks } from "@/lib/utils";
import React, { useState } from "react";

const HeaderButton = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <button
            onBlur={(e) => {
                e.stopPropagation();
                setOpenModal(false);
            }}
            onClick={(e) => setOpenModal(true)}
            className="relative"
        >
            <div
                className="bg-blue-600 h-8 w-8 rounded-lg text-center flex items-center justify-center text-white"
                onClick={(_) => _}
            >
                +
            </div>
            <div onClick={(e) => e.stopPropagation()}>
                {openModal && (
                    <>
                        <DropDown className="min-w-[15rem]">
                            {headerLinks.map(({ name, img }) => {
                                return (
                                    <DropDownChild
                                        key={name}
                                        link="/about"
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
