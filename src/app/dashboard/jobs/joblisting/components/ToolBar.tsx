import React from "react";
import { MdFormatBold } from "react-icons/md";
import { MdOutlineFormatItalic } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { MdLink } from "react-icons/md";
import { LiaUnlinkSolid } from "react-icons/lia";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { VscListOrdered } from "react-icons/vsc";

const ToolBar = () => {
    return (
        <div className="border p-3 px-2 flex items-center space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
            >
                <path
                    d="M10.15 16.15C8.88333 16.15 7.75833 15.775 6.775 15.025C5.79167 14.275 5.08333 13.25 4.65 11.95L6.85 11C7.08333 11.8 7.48733 12.4583 8.062 12.975C8.63733 13.4917 9.35 13.75 10.2 13.75C10.9 13.75 11.5333 13.5833 12.1 13.25C12.6667 12.9167 12.95 12.3833 12.95 11.65C12.95 11.35 12.8917 11.075 12.775 10.825C12.6583 10.575 12.5 10.35 12.3 10.15H15.1C15.1833 10.3833 15.246 10.6207 15.288 10.862C15.3293 11.104 15.35 11.3667 15.35 11.65C15.35 13.0833 14.8373 14.1917 13.812 14.975C12.7873 15.7583 11.5667 16.15 10.15 16.15ZM0 8.15V6.15H20V8.15H0ZM10.05 0C11.15 0 12.1127 0.270667 12.938 0.812C13.7627 1.354 14.4 2.18333 14.85 3.3L12.65 4.275C12.5 3.79167 12.2207 3.35833 11.812 2.975C11.404 2.59167 10.8333 2.4 10.1 2.4C9.41667 2.4 8.85 2.55433 8.4 2.863C7.95 3.171 7.7 3.6 7.65 4.15H5.25C5.28333 3 5.73767 2.02067 6.613 1.212C7.48767 0.404 8.63333 0 10.05 0Z"
                    fill="#98A2B3"
                />
            </svg>
        </div>
    );
};

export default ToolBar;
