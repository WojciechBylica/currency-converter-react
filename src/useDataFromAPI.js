import { useEffect, useState } from "react";
import axios from 'axios';

export const useDataFromAPI = () => {
    const [dataFromAPI, setDataFromAPI] = useState({
        date: null,
        rates: null,
        status: "loading",
    })
    useEffect(() => {
        const getDataFromAPI = async () => {
            try {
                const response = await axios.get('https://api.exchangerate.host/latest?symbols=PLN,EUR,USD,RUB&base=PLN')
                setDataFromAPI({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success",
                });
            } catch (error) {
                setDataFromAPI({ status: "error" });
            }
        };
        setTimeout(getDataFromAPI, 2000);
    }, []);
    return {
        dataFromAPI,
    };
};