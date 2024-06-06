import Image from "next/image";
import Link from "next/link";
import React from "react";

const DropDown: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <div
            className={`${className} absolute bg-white py-1 rounded-md top-0 right-0 shadow`}
        >
            {children}
        </div>
    );
};

export default DropDown;

export const DropDownChild = ({
    link,
    img,
    name,
    svg = false,
    ...props
}: {
    link: string;
    name: string;
    svg: boolean;
    img: string | React.ReactNode;
}) => {
    console.log(props);
    return (
        <div className="w-full text-start flex px-3  p-2 hover:bg-[#bad8ff]  rounded justify-start">
            <div className="space-x-2 w-full flex items-center">
                {svg ? (
                    img
                ) : (
                    <Image
                        alt="header__link__image__dropDown"
                        src={img as string}
                        width={20}
                    />
                )}
                <p className="text-[0.7rem]    font-medium">{name}</p>
            </div>
        </div>
    );
};
