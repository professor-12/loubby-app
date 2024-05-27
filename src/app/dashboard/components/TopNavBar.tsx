import Search from "@/components/Search";
import Image from "next/image";
import React from "react";

const TopNavBar = ({ setOpen }: { setOpen: any }) => {
    console.log(setOpen);
    return (
        <div className="flex w-full px-4 justify-between items-center">
            <div
                onClick={() => setOpen(!false)}
                className="cursor-pointer lg:hidden"
            >
                <Image
                    src="/Menu.svg"
                    width={30}
                    height={30}
                    alt="Menu Button"
                />
            </div>
            <Search className="border" />
            <div className="space-x-3 items-center flex">
                <div className="flex space-x-5">
                    <button className="bg-gradient-to-r text-nowrap hidden lg:flex font-medium from-[#BB95C5] to-[#7DC3CB] hover:backdrop-grayscale rounded-lg p-2 text-sm px-3 text-center gradient text-white ">
                        Refer a Company
                    </button>
                    <div className="bg-blue-600 h-8 w-8 rounded-lg text-center flex items-center justify-center text-white">
                        +
                    </div>
                </div>
                <Image src={"/profileImg.svg"} alt="" width={30} height={30} />
                <div className="relative">
                    <Image
                        src={"/Notification.svg"}
                        width={20}
                        height={20}
                        alt="notification"
                    />
                    <span className="absolute bottom-2 left-[.37rem] bg-red-700 text-white flex items-center justify-center text-center h-4 w-4 rounded-full text-xs font-semibold">
                        1
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;
