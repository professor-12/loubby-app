"use client";

import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react";

interface StoreType<T> {
    position: Number;
    setPosition?: React.Dispatch<React.SetStateAction<T>>;
}

const initialStore = {
    active: "",
    position: 0,
};
const Store = createContext<StoreType<number>>(initialStore);

export const useJobDetailStore = () => {
    const context = useContext(Store);

    if (context === undefined)
        throw new Error(
            "useJobDetailStore should be called inside its provider"
        );

    return context;
};
const JobDetailProvider = ({ children }: PropsWithChildren) => {
    const [position, setPosition] = useState(initialStore.position);

    return (
        <Store.Provider value={{ position, setPosition }}>
            {children}
        </Store.Provider>
    );
};

export default JobDetailProvider;
