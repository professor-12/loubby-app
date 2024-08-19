"use client";
import "react-toastify/dist/ReactToastify.css";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
const moserat = Montserrat({ subsets: ["latin"] });

const CustomToastContainer = () => {
    return (
        <ToastContainer draggable/>
    );
};

export default CustomToastContainer;
