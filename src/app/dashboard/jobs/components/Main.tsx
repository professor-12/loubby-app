import React from "react";
import HeaderJob from "./HeaderJob";

const fetchData = async (token: string, url: string): Promise<any> => {
    const request = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    return await request.json();
};
const Main = () => {
    return (
        <div>
            <HeaderJob />
        </div>
    );
};

export default Main;
