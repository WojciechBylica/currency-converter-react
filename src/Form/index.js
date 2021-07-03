import Results from "./Results";
import Buttons from "./Buttons";
import { StyledForm, Fieldset, FormField, Input, StyledSpan } from './styled';
import { useForm } from './useForm';
import { Wrapper } from "../Clock/styled";

const Form = ({ dataFromAPI }) => {
    const {
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
    } = useForm()

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueFrom = 1 / +dataFromAPI.rates[currencyFrom];
        const valueTo = 1 / +dataFromAPI.rates[currencyTo];
        const result = calculateResult(amount, valueFrom, valueTo);
        setResult({ amount: amount, currencyFrom: currencyFrom, value: result, currencyTo: currencyTo });
        setAmount("");
    };

    console.log(dataFromAPI.rates)
    return (
        <>
            <Wrapper> Aktualizacja kursów: {dataFromAPI.date}</Wrapper>
            <StyledForm onSubmit={onFormSubmit}>
                <Fieldset>
                    < label >
                        Wybierz walutę do przeliczenia:
                        <FormField
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                            name="currencyFrom"
                            required
                        >
                            {Object.keys(dataFromAPI.rates).map(currencyFrom => (
                                <option key={currencyFrom}>
                                    {currencyFrom}
                                </option>
                            ))}
                        </FormField>
                    </label >
                    < label >
                        Wybierz walutę docelową:
                        <FormField
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}
                            name="currencyTo"
                            required
                        >
                            {Object.keys(dataFromAPI.rates).map(currencyTo => (
                                <option key={currencyTo}>
                                    {currencyTo}
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
                {!hideRates && <Fieldset>
                    <legend><StyledSpan>Kursy walut</StyledSpan></legend>
                    {Object.keys(dataFromAPI.rates).filter(currency => currency !== "PLN").map(currency =>
                        <label>
                            {currency}
                            <Input as="input"
                                key={currency}
                                readonly
                                defaultValue={1 / +dataFromAPI.rates[currency]}
                            />
                        </label>
                    )}
                </Fieldset>}
            </StyledForm>
        </>
    )
};

export default Form;