"use client";
import React, { useState, createContext, useContext} from "react";

const Store = createContext({ direction: null, x: 0 });

export function useStoreContext() {
    return useContext(Store);
}

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [direction, setDirection] = useState<"l" | "r" | null>(null);
    const [x, setX] = useState(0);
    return (
        <Store.Provider value={{ direction, setDirection, setX, x } as any}>
            {children}
        </Store.Provider>
    );
};

export default StoreProvider;
