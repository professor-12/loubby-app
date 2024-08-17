"use client";

import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react";

interface StoreType<T> {
    x: Number;
    setX?: React.Dispatch<React.SetStateAction<T>>;
}

const initialStore = {
    x: 0,
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
    const [x, setX] = useState(initialStore.x);

    return <Store.Provider value={{ x, setX }}>{children}</Store.Provider>;
};

export default JobDetailProvider;
