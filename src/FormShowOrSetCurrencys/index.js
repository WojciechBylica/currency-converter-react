const FormShowOrSetCurrencys = ({ currencys, hideRates, }) => {

    return (
        <>
            <form
                className={` ${hideRates === true ? "form__currency--hidden" : ""}`}>
                <fieldset className="form__fieldset">
                    <legend>Kursy walut</legend>
                    {currencys.slice(1).map(currency =>
                        <label>
                            {currency.name}
                            <input
                                id={currencys.id+1}
                                type="number"
                                className="form__field"
                                min="0.01"
                                step="0.01"
                                defaultValue={currency.value}
                                readOnly={true}
                            />
                        </label>
                    )}
                </fieldset>
            </form>
        </>
    );
};

export default FormShowOrSetCurrencys;




