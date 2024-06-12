import React from "react";
import HeaderJob from "./HeaderJob";
import TabContainer from "./TabContainer";

const Main = () => {
    return (
        <div className="bg-dark-slate pb-5 min-h-[90vh] overflow-x-hidden relative">
            <HeaderJob />
            <TabContainer />
        </div>
    );
};

export default Main;
