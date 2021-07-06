import Results from "./Results";
import Buttons from "./Buttons";
import { StyledForm, Fieldset, FormField, Input, StyledSpan } from './styled';
import { useForm } from './useForm';
import { Wrapper } from "../Clock/styled";

const Form = ({ ratesData }) => {
    const {
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
    } = useForm()

    const onFormSubmit = (event) => {
        event.preventDefault();
        const valueFrom = +ratesData.rates[currencyFrom].mid;
        const valueTo = +ratesData.rates[currencyTo].mid;
        const result = calculateResult(amount, valueFrom, valueTo);
        setResult({ amount: amount, currencyFrom: ratesData.rates[currencyFrom].code, value: result, currencyTo: ratesData.rates[currencyTo].code });
        setAmount("");
    };
    return (
        <>
            <Wrapper> Aktualizacja kursów: {ratesData.date}</Wrapper>
            <Wrapper>{ratesData.table}</Wrapper>
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
                            {Object.keys(ratesData.rates).map(currencyFrom => (
                                <option
                                    key={currencyFrom}
                                    value={currencyFrom}
                                >
                                    {ratesData.rates[currencyFrom].currency}{" "}{"("}{ratesData.rates[currencyFrom].code}{")"}
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
                            {Object.keys(ratesData.rates).map(currencyTo => (
                                <option
                                    key={currencyTo}
                                    value={currencyTo}
                                >
                                    {ratesData.rates[currencyTo].currency}{" "}{"("}{ratesData.rates[currencyTo].code}{")"}
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
                    {Object.keys(ratesData.rates).map(rate =>
                        <label key={rate}>
                            {ratesData.rates[rate].currency}{" "}{"("}{ratesData.rates[rate].code}{")"}
                            <Input as="p">
                                {ratesData.rates[rate].mid}
                            </Input>
                        </label>
                    )}
                </Fieldset>
                }
            </StyledForm>
        </>
    )
};
export default Form;