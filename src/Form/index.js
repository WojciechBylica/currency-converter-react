import Results from "./Results";
import Buttons from "./Buttons";
import currencies from "../currencies";
import { StyledForm, Fieldset, FormField, Input, StyledSpan } from './styled';
import { useForm } from './useForm';

const Form = () => {
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

        const valueFrom = currencies.find(({ name }) => name === currencyFrom);
        const valueTo = currencies.find(({ name }) => name === currencyTo);
        const result = calculateResult(amount, valueFrom.value, valueTo.value);
        setResult({ amount: amount, currencyFrom: currencyFrom, value: result, currencyTo: currencyTo });
        setAmount("");
    };

    return (
        <>
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
                            {currencies.map(currency => (
                                <option key={currency.id}>
                                    {currency.id}
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
                            {currencies.map(currency => (
                                <option key={currency.id}>
                                    {currency.name}
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
                    {currencies.slice(1).map(currency =>
                        <label>
                            {currency.name}
                            <Input as="input"
                                onChange={(event) => currency.value = event.target.value}
                                key={currency.id}
                                type="number"
                                min="0.01"
                                step="0.01"
                                defaultValue={currency.value}
                            />
                        </label>
                    )}
                </Fieldset>}
            </StyledForm>
        </>
    );
};

export default Form;