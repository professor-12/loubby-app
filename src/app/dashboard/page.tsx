import React from "react";
import Header from "./components/Header";
import GoodForYou from "./components/goodfit/GoodForYou";
import PipeLineSummary from "./components/PipeLineSummary";

import {
    LatestPosting,
    UpComingSchedule,
    Summary,
} from "@/components/dynamicImports";
const Page = () => {
    return (
        <div className="p-4 w-full  overflow-y-auto overflow-x-hidden h-screen pb-20">
            <Header />
            <div className="flex flex-col lg:flex-row py-4 space-y-3 md:space-y-0 lg:space-x-3">
                <div className="w-full  lg:min-w-[61%]">
                    <div className="space-y-4">
                        <Summary />
                        <div className="col-span-3 space-y-4">
                            <div>
                                <LatestPosting />
                            </div>
                            <div>
                                <GoodForYou />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex  lg:min-w-[30%] flex-col space-y-3 flex-1">
                    <UpComingSchedule />
                    <PipeLineSummary />
                </div>
            </div>
        </div>
    );
};

export default Page;
