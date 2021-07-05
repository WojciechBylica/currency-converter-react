import Results from "./Results";
import Buttons from "./Buttons";
import { StyledForm, Fieldset, FormField, Input, StyledSpan } from './styled';
import { useForm } from './useForm';
import { Wrapper } from "../Clock/styled";

const Form = ({ dataFromNBP }) => {
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
        const valueFrom = +dataFromNBP.rates[currencyFrom].mid;
        const valueTo = +dataFromNBP.rates[currencyTo].mid;
        const result = calculateResult(amount, valueFrom, valueTo);
        setResult({ amount: amount, currencyFrom: dataFromNBP.rates[currencyFrom].code, value: result, currencyTo: dataFromNBP.rates[currencyTo].code });
        setAmount("");
    };
    return (
        <>
            <Wrapper> Aktualizacja kursów: {dataFromNBP.date}</Wrapper>
            <Wrapper>{dataFromNBP.table}</Wrapper>
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
                            {Object.keys(dataFromNBP.rates).map(currencyFrom => (
                                <option
                                    key={currencyFrom}
                                    value={currencyFrom}
                                >
                                    {dataFromNBP.rates[currencyFrom].code}{" "}{dataFromNBP.rates[currencyFrom].currency}
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
                            {Object.keys(dataFromNBP.rates).map(currencyTo => (
                                <option
                                    key={currencyTo}
                                    value={currencyTo}
                                >
                                    {dataFromNBP.rates[currencyTo].code}{" "}{dataFromNBP.rates[currencyTo].currency}
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
                    {Object.keys(dataFromNBP.rates).map(rate =>
                        <label>
                            {dataFromNBP.rates[rate].code}{" "}{dataFromNBP.rates[rate].currency}
                            <Input as="p"
                                key={dataFromNBP.rates[0].currency}>
                                {dataFromNBP.rates[rate].mid}
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