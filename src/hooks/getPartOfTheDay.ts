import React, { useCallback, useEffect } from 'react'

const useGetPartOfTheDay = () => {
       const getPartofTheDay = useCallback(() => {
        const hour = new Date().getHours();
        if (!hour) return "Day";
        if (hour <= 12 && hour >= 0) return "Morning";
        if (hour >= 13 && hour <= 18) return "Afternoon";
        return "Evening";
    },[]);
    useEffect(() => {
        const time = setInterval(() => {
            getPartofTheDay();
        }, 1000 * 60 * 10);
        return () => {
            clearInterval(time);
        };
    }, [getPartofTheDay]);
    return getPartofTheDay()
}

export default useGetPartOfTheDay