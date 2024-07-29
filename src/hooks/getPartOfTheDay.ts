import React, { useCallback, useEffect, useState } from 'react';

const useGetPartOfTheDay = () => {
    const [partOfTheDay, setPartOfTheDay] = useState('');

    const getPartofTheDay = useCallback(() => {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 12) return "Morning";
        if (hour >= 12 && hour < 18) return "Afternoon";
        return "Evening";
    }, []);

    useEffect(() => {
        const updatePartOfTheDay = () => {
            setPartOfTheDay(getPartofTheDay());
        };
        updatePartOfTheDay();

        const time = setInterval(() => {
            updatePartOfTheDay();
        }, 1000 * 60 * 10); // Update every 10 minutes

        return () => {
            clearInterval(time);
        };
    }, [getPartofTheDay]);

    return partOfTheDay;
};

export default useGetPartOfTheDay;
