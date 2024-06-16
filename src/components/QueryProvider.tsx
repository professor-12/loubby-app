"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

QueryClientProvider;

const QueryProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
