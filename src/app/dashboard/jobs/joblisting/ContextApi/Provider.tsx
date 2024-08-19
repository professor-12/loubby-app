"use client";
import React, { createContext, useContext, useState } from "react";

type G = React.SetStateAction<number | "done">;

interface IStore<T> {
    currentStep: number | "done";
    setcurrentStep?: T;
    handleIncreaseSteps?: () => void;
    handledecreaseSteps?: () => void;
}

const initialState: IStore<React.Dispatch<G>> = {
    currentStep: 1,
};
const store = createContext(initialState);

export const useGetJobListing = () => {
    return useContext<IStore<React.Dispatch<G>>>(store);
};

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentStep, setcurrentStep] = useState<number | "done">(1);
    const handleIncreaseSteps = () => {
        if ((currentStep as number) >= 6) return;
        setcurrentStep((prev) => {
            return (prev as number) + 1;
        });
    };
    const handledecreaseSteps = () => {
        if ((currentStep as number) <= 1) return;
        setcurrentStep((prev) => {
            return (prev as number) - 1;
        });
    };
    return (
        <store.Provider
            value={{
                currentStep,
                setcurrentStep,
                handleIncreaseSteps,
                handledecreaseSteps,
            }}
        >
            {children}
        </store.Provider>
    );
};

export default Provider;
