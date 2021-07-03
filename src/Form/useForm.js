import { useState } from "react";

export const useForm = () => {
    const [hideRates, setHideRates] = useState(true);
    const toggleHideRates = () => {
        setHideRates(hideRates => !hideRates);
    };
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("EUR");
    const [result, setResult] = useState();
    const calculateResult = (amount, valueFrom, valueTo) => +amount * +valueFrom / +valueTo;

    return {
        currencyFrom,
        currencyTo,
        calculateResult,
        amount,
        setAmount,
        setResult,
        setCurrencyFrom,
        setCurrencyTo,
        hideRates,
        toggleHideRates,
        result,
    };
};