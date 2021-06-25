import { useState } from "react";
import currencies from "../currencies";

export const useForm = () => {
    const [hideRates, setHideRates] = useState(true);
    const toggleHideRates = () => {
        setHideRates(hideRates => !hideRates);
    };
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].name);
    const [currencyTo, setCurrencyTo] = useState(currencies[1].name);
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

    }
};