"use client";
import React, { useState } from "react";

const PipeLine = () => {
    const [data, setData] = useState([
        { name: "First Round", id: 1 },
        { name: "Phone Interview", id: 2 },
        { name: "Hiring Manager", id: 3 },
    ]);

    function handleStartDrag(e: React.DragEvent<HTMLDivElement>, id: any) {
        e.dataTransfer.setData("text/plain", id);
    }
    function handleDragEnd(
        e: React.DragEvent<HTMLDivElement>,
        id: number | string
    ) {
        const _id = +e.dataTransfer.getData("text/plain");
        let copyofData = [...data];
        let before = copyofData.findIndex(({ id }) => id === _id);
        let after = copyofData.findIndex(({ id }) => id == id);
        let node = copyofData[before];
        copyofData[before] = copyofData[after];
        copyofData[after] = node;
        console.log(node);
        setData(copyofData);
    }
    function onDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }
    return (
        <div className="h-[70vh] overflow-hidden  text-sm font-medium text-black">
            <div className="px-[2.5rem] p-3 flex   overflow-hidden">
                <div className="space-x-2 items-center flex">
                    <span>Applied</span>
                    <span className="text-sm text-blue-500">0</span>
                </div>
                {data.map(({ name, id }, index) => (
                    <div
                        onDragOver={onDragOver}
                        onDragStart={(e) => {
                            handleStartDrag(e, id.toString());
                        }}
                        onDrop={(e) => handleDragEnd(e, id)}
                        draggable
                        key={id}
                        className="flex items-center px-[1rem] gap-[0.5rem]"
                    >
                        <span>{name}</span>
                        <span className="text-sm text-blue-500">0</span>
                        <div className="rotate-90    hover:text-black tracking-wider font-semibold  text-slate-600/70 cursor-pointer select-none">
                            ...
                        </div>
                    </div>
                ))}
                <div className="space-x-2 p-[1rem]">
                    <span>Hired</span>
                    <span className="text-sm text-blue-500">0</span>
                </div>
            </div>
        </div>
    );
};

export default PipeLine;
