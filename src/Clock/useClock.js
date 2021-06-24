import { useState, useEffect } from "react";

export const useClock = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, [])

    const formatDate = (currentDate) => currentDate.toLocaleDateString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    return {
        currentDate,
        formatDate,
    };
};