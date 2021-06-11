const LabelWithInput = () => {
    return (
        <label>Wpisz kwotę
            <input type="number" className="form__field" min="0.01" required step="0.01" />
        </label>
    );
};

export default LabelWithInput;