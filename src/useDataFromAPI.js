import { useEffect, useState } from "react";
import axios from 'axios';

export const useDataFromAPI = () => {
    const [ratesData, setRatesData] = useState({
        date: null,
        table: null,
        rates: null,
        status: "loading",
    })
    useEffect(() => {
        const getratesData = async () => {
            try {
                const NBPAPI = 'https://api.nbp.pl/api/exchangerates/tables/a/';
                const response = await axios.get(NBPAPI);
                const rates = response.data[0].rates;
                const ratesWithPLN = [
                    {
                        code: "PLN",
                        currency: "polski złoty",
                        mid: 1,
                    },
                    ...rates,
                ];
                setRatesData({
                    date: response.data[0].effectiveDate,
                    table: response.data[0].no,
                    rates: ratesWithPLN,
                    status: "success",
                });
            } catch (error) {
                setRatesData({ status: "error" });
            };
        };
        setTimeout(getratesData, 2000);
    }, []);
    return ratesData;
};