import React from "react";
import Image from "next/image";

const Search = ({ className }: { className: string }) => {
    return (
        <div className="flex bg-[#F9FAFB] w-[69%] overflow-hidden border-slate-300 border focus:border-blue-400  group rounded-lg space-x-2 lg:w-[50%] px-3">
            <Image
                src={"/searchIcon.svg"}
                className="bg-transparent"
                alt=""
                width={18}
                height={18}
            />
            <input
                placeholder="Search"
                type="text"
                className="p-2 text-sm placeholder-text-sm bg-transparent focus:group-[]:ring-blue-600 focus:outline-none w-full"
            />
        </div>
    );
};

export default Search;
