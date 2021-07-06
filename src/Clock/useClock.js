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
    }, []);

    return currentDate;
};