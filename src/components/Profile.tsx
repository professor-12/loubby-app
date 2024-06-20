"use client";
import Image from "next/image";
import React from "react";

const Profile = ({
    expand,
    setExpand,
}: {
    expand: boolean;
    setExpand: any;
}) => {
    return (
        <div
            className={`border-t flex bottom-0 gap-3 items-center pt-3  justify-between text-[0.78rem] ${
                !expand && "flex-col-reverse"
            }`}
        >
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Image
                        width={30}
                        height={20}
                        src={"/profileImg.svg"}
                        alt="Profile Button"
                    />
                    <div className="absolute bg-green-700 p-[0.4rem] rounded-full top-[50%] left-[60%] border border-white" />
                </div>
                {expand && <h1>Emmanuel Badejo</h1>}
            </div>
            <Image
                onClick={() => setExpand((prev: boolean) => !prev)}
                src="/DoubleRightCaret.svg"
                alt="DoubleRightCaret"
                className="w-3 h-3 cursor-pointer"
                width={30}
                height={30}
            />
        </div>
    );
};

export default Profile;
