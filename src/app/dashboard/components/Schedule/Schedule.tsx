import React from "react";
const Schedule = ({ item }: { item: any }) => {
    const formatEndDate = new Date(item?.endDate).toLocaleDateString("em-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    const time = new Date(item?.startDate).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    const description = JSON.parse(item?.description)?.blocks[0]?.text;
    const colourCode = ["#f79009", "#ff69b4", "#1570ef", "#12b76a"];
    let color = Math.round(Math.random() * colourCode.length);
    return (
        <div className="space-y-2">
            <span className="text-xs text-slate-600 font-medium">
                {formatEndDate}
            </span>
            <div className="flex space-x-3">
                <div
                    className="border-r-[3.5px] flex items-center justify-center flex-col  border-green-600 pr-6 font-medium text-[0.79rem]"
                    style={{ borderColor: colourCode[color] }}
                >
                    <div>
                        <span>{time.split(" ")[0]}</span>
                        <br />
                        <span>{time.split(" ")[0 + 1]}</span>
                    </div>
                </div>
                <div className="space-y-[0.7rem]">
                    <h1 className="font-medium">{item?.title}</h1>
                    <p className="text-sm text-slate-900">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
