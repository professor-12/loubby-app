"use client";
import DropDown, { DropDownChild } from "@/components/DropDownMenu/DropDown";
import { ProfileLinks } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ProfileOptionMenu = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div
            className="relative cursor-pointer w-8 h-8 z-[999]"
            onClick={() => setOpenModal(true)}
            onBlur={(e) => {
                e.stopPropagation();
                setOpenModal(false);
            }}
            tabIndex={-1}
        >
            <Image
                src={"/profileImg.svg"}
                alt=""
                className="w-full"
                width={30}
                height={30}
            />
            {openModal && (
                <DropDown className="z-[2000]">
                    {ProfileLinks.map(({ img, link, name }) => {
                        return (
                            <DropDownChild
                                key={name}
                                svg
                                link="ach"
                                img={img}
                                name={name}
                            />
                        );
                    })}
                </DropDown>
            )}
        </div>
    );
};

export default ProfileOptionMenu;
