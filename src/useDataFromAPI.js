import { useEffect, useState } from "react";
import axios from 'axios';

export const useDataFromAPI = () => {
    const [dataFromNBP, setDataFromNBP] = useState({
        date: null,
        table: null,
        rates: null,
        status: "loading",
    })
    useEffect(() => {
        const getDataFromNBP = async () => {
            try {
                const response = await axios.get('https://api.nbp.pl/api/exchangerates/tables/a/');
                const responseData = response.data[0].rates;
                const responseDataWithPLN = [
                    ...responseData,
                    {
                        code: "PLN",
                        currency: "polski złoty",
                        mid: 1,
                    },
                ];
                setDataFromNBP({
                    date: response.data[0].effectiveDate,
                    table: response.data[0].no,
                    rates: responseDataWithPLN,
                    status: "success",
                });
            } catch (error) {
                setDataFromNBP({ status: "error" });
            };
        };
        setTimeout(getDataFromNBP, 2000);
    }, []);
    return dataFromNBP;
};