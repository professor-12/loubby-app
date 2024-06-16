"use client";
import React, { createContext, useContext, useState } from "react";

type G = React.SetStateAction<number | "done">;

interface IStore<T> {
    currentStep?: number | "done";
    setcurrentStep?: T;
}

const initialState: IStore<React.Dispatch<G>> = {
    currentStep: 1,
};
const store = createContext(initialState);

export const useGetJobListing = () => {
    return useContext<IStore<React.Dispatch<G>>>(store);
};

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentStep, setcurrentStep] = useState<number | "done">(-7 + 8);

    return (
        <store.Provider value={{ currentStep, setcurrentStep }}>
            {children}
        </store.Provider>
    );
};

export default Provider;
