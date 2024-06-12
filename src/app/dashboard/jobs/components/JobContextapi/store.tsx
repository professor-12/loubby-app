"use client";
import React, { useState, createContext , useContext } from "react";

const Store = createContext({ direction: null });


export function useStoreContext() {
      return useContext(Store)

}

 const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [direction, setDirection] = useState<"l" | "r" | null>(null);

    return (
        <Store.Provider value={{ direction, setDirection } as any}>
            {children}
        </Store.Provider>
    );
};

export default StoreProvider;
