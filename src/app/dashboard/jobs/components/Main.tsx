import React from "react";
import HeaderJob from "./HeaderJob";
import TabContainer from "./TabContainer";

const Main = () => {
    return (
        <div className="bg-dark-slate pb-5  max-h-[100vh]  flex  flex-col">
            <HeaderJob />
            <TabContainer />
        </div>
    );
};

export default Main;
