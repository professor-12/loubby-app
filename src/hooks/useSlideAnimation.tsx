"use client";
import React, { useCallback, useEffect, useState } from "react";

export const useSlideAnimation = (
    slideShow: Array<string | any>,
    duration?: number
) => {
    const [index, setState] = useState(0);

    const start = useCallback(() => {
        return setInterval(() => {
            if (index >= slideShow.length - 1) {
                setState(0);
            } else {
                setState((prev: any) => prev + 1);
            }
        }, duration ?? 2600);
    }, [index, slideShow.length, duration]);
    useEffect(() => {
        const interval = start();
        return () => {
            clearInterval(interval);
        };
    }, [start]);

    return { index };
};
