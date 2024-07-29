import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { HTMLAttributes } from "react";

interface DropDownElemnt extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const DropDown: React.FC<DropDownElemnt> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            {...props}
            className={`${className} space-y-[0.14rem] absolute bg-[#f2f4f7] rounded-md top-0 right-0 shadow`}
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
    svg?: boolean;
    img?: string | React.ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
    const router = useRouter();
    const handle = props?.onClick;

    return (
        <div
            {...props}
            className={
                props?.className +
                " w-full text-start flex px-3 cursor-pointer  p-2 hover:bg-[#bad8ff]  rounded justify-start  bg-white z-[70]"
            }
            onClick={
                handle
                    ? handle
                    : () => {
                          router.push(link);
                      }
            }
        >
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
                <p className="text-[0.7rem]    font-medium text-nowrap">
                    {name}
                </p>
            </div>
        </div>
    );
};
