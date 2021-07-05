import { useState } from "react";

export const useForm = () => {
    const [hideRates, setHideRates] = useState(true);
    const toggleHideRates = () => {
        setHideRates(hideRates => !hideRates);
    };
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("35");
    const [currencyTo, setCurrencyTo] = useState("1");
    const [result, setResult] = useState();
    const calculateResult = (amount, valueFrom, valueTo) => +amount * +valueFrom / +valueTo;

    return {
        currencyFrom,
        currencyTo,
        setCurrencyFrom,
        setCurrencyTo,
        calculateResult,
        amount,
        setAmount,
        setResult,
        hideRates,
        toggleHideRates,
        result,
    };
};