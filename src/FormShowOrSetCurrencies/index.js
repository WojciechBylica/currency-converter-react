import Fieldset from "../Fieldset"
const FormShowOrSetCurrencies = ({ currencies, hideRates, changeRate }) => {

    return (
        <>
            <form
                className={` ${hideRates === true ? "form__currency--hidden" : ""}`}>
                <Fieldset>
                    <legend>Kursy walut</legend>
                    {currencies.slice(1).map(currency =>
                        <label>
                            {currency.name}
                            <input
                                onInput={changeRate}
                                id={currency.name}
                                type="number"
                                className="form__field"
                                min="0.01"
                                step="0.01"
                                defaultValue={currency.value}
                            // readOnly={true}
                            />
                        </label>
                    )}
                </Fieldset>
            </form>
        </>
    );
};

export default FormShowOrSetCurrencies;




