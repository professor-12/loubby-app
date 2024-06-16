import { getNextMonthDate } from "./helpers";



export const fetchEvents = async <T>(token: T) => {
    const response = await fetch(
        `https://api.loubby.ai/api/v1/shared/events/all?start=${new Date().toISOString()}&end=${getNextMonthDate(
            new Date()
        ).toISOString()}`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    );
    const data = await response.json();
    return data;
};

export const fetchInterViews = async <T>(token: T) => {
    const response = await fetch(`https://api.loubby.ai/api/v1/user/details/`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    );
    const data = await response.json();
    return data;
};


export const fetchJob = async <T>(token: T) => {
    const response = await fetch(`https://api.loubby.ai/api/v1/employer/listing/`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    );
    const data = await response.json();
    return data;
};
