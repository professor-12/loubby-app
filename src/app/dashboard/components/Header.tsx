import React from "react";

const Header = () => {
    return (
        <div className="bg-[url('/d.png')] flex  bg-no-repeat bg-[-79rem]  min-h-[11rem]  overflow-hidden rounded-lg">
            <div className="bg-blue-500 w-full flex justify-between flex-col bg-opacity-65 p-6">
                <div>
                    <h1 className="md:text-xl font-medium text-white">
                        Good Evening Badejo!
                    </h1>
                    <p className="text-xs md:text-sm text-white">
                        Welcome to your remote talent hiring dashboard
                    </p>
                </div>
                <div className="flex gap-4 justify-between md:justify-start items-center flex-wrap">
                    <button className="bg-white md:w-auto w-full p-[0.5rem] text-sm font-medium px-3 rounded-lg">
                        Hire Talents
                    </button>
                    <p className="text-white text-sm underline">
                        Browse Talent
                    </p>
                    <p className="text-white text-sm underline"> Post a Job</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
