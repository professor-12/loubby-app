import React from "react";
import Main from "./components/Main";
import StoreProvider from "./components/JobContextapi/store";

const Page = () => {
    return (
        <StoreProvider>
            <Main />
        </StoreProvider>
    );
};

export default Page;
