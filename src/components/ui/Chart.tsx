import { Line, Pie, Doughnut } from "react-chartjs-2";
import {
    Chart as chartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import React from "react";

chartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,

    LineElement
);

const Chart = () => {
    const options = {
        responsive: true,
    };
    const data = {
        label: ["applicants"],
        datasets: [
            {
                label: "No of applicants",
                data: [100],

                backgroundColor: "#EAECF0",
                hoverOffset: 4,
                borderWidth: 4,
                hoverBorderColor: "white",
                circumference: 355,
                weight: 0.3,
                radius: "80%",
            },
        ],
    };
    return <Doughnut options={options} data={data} />;
};

export default Chart;
