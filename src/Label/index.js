const Label = ({ currencys, title }) => {

    return (
        < label >
            {title}
            <select name="currencyFrom" className="form__field form__field--background" required>
                <option value={currencys[0].name}>{currencys[0].name}</option>
                <option value={currencys[1].name}>{currencys[1].name}</option>
                <option value={currencys[2].name}>{currencys[2].name}</option>
                <option value={currencys[3].name}>{currencys[3].name}</option>
            </select>
        </label >
    )
};

export default Label;