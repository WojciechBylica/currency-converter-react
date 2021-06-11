const LabelShowOrSetCurrencys = ({currencys}) => (
    <>
        <legend>Kursy walut</legend>
        <label>
            {currencys[1].name}
            <input type="number" className="form__field" min="0.01" step="0.01" value={currencys[1].value} />
        </label>
        <label>
            {currencys[2].name}
            <input type="number" className="form__field" min="0.01" step="0.01" value={currencys[2].value} />
        </label>
        <label>
            {currencys[3].name}
            <input type="number" className="form__field" min="0.01" step="0.01" value={currencys[3].value} />
        </label>
    </>
);

export default LabelShowOrSetCurrencys;




