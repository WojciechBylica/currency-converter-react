import Results from "./Results";
import Buttons from "./Buttons";
import { StyledForm, Fieldset, FormField, Input, StyledSpan } from './styled';
import { useForm } from './useForm';
import { Wrapper } from "../Clock/styled";
import { useState } from "react";

const Form = ({ ratesData }) => {
    const {
        currencyFrom,
        currencyTo,
        setCurrencyFrom,
        setCurrencyTo,
        amount,
        setAmount,
        setResult,
        result,
    } = useForm()

    const rates = ratesData.rates;
    const [hideRates, setHideRates] = useState(true);
    const toggleHideRates = () => {
        setHideRates(hideRates => !hideRates);
    };
    const calculateResult = (amount, valueFrom, valueTo) => +amount * +valueFrom / +valueTo;

    const onFormSubmit = (event) => {
        event.preventDefault();
        const valueFrom = +ratesFrom.mid;
        const valueTo = +ratesTo.mid;
        const result = calculateResult(amount, valueFrom, valueTo);
        setResult({ amount: amount, currencyFrom: ratesFrom.code, value: result, currencyTo: ratesTo.code });
        setAmount("");
    };
    return (
        <>
            <Wrapper> Aktualizacja kursów: {ratesData.date}</Wrapper>
            <Wrapper>{ratesData.table}</Wrapper>
            <StyledForm onSubmit={onFormSubmit}>
                <Fieldset>
                    <label>
                        Wybierz walutę do przeliczenia:
                        <FormField
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                            name="currencyFrom"
                            required
                        >
                            {Object.keys(rates).map(currencyFrom => (
                                <option
                                    key={currencyFrom}
                                    value={currencyFrom}
                                >
                                    {rates[currencyFrom].currency}{" ("}{rates[currencyFrom].code})
                                </option>
                            ))}
                        </FormField>
                    </label >
                    <label>
                        Wybierz walutę docelową:
                        <FormField
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}
                            name="currencyTo"
                            required
                        >
                            {Object.keys(rates).map(currencyTo => (
                                <option
                                    key={currencyTo}
                                    value={currencyTo}
                                >
                                    {rates[currencyTo].currency}{" ("}{rates[currencyTo].code})
                                </option>
                            ))}
                        </FormField>
                    </label >
                    <label>
                        Wpisz kwotę:
                        <Input as="input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            min="0.01"
                            required
                            step="0.01"
                        />
                    </label>
                </Fieldset>
                <Buttons hideRates={hideRates} toggleHideRates={toggleHideRates} />
                <Results
                    result={result}
                    amount={amount}
                />
                {!hideRates && <table>
                    <caption><StyledSpan>Kursy walut</StyledSpan></caption>
                    <thead>
                        <tr>waluta</tr>
                        <td>symbol</td>
                        <td>średni kurs</td>
                    </thead>
                    <tbody>
                        {Object.keys(rates).map(rate =>
                            <tr key={rate}>
                                <th>{rates[rate].currency}</th>
                                <td>{rates[rate].code}</td>
                                <td> {rates[rate].mid}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                }
            </StyledForm>
        </>
    )
};
export default Form;