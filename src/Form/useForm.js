import { useState } from "react";

export const useForm = () => {
    const [amount, setAmount] = useState("");
    const initialValueFrom = "0";
    const initialValueTo = "2";
    const [currencyFrom, setCurrencyFrom] = useState(initialValueFrom);
    const [currencyTo, setCurrencyTo] = useState(initialValueTo);
    const [result, setResult] = useState();

    return {
        currencyFrom,
        currencyTo,
        setCurrencyFrom,
        setCurrencyTo,
        amount,
        setAmount,
        setResult,
        result,
    };
};