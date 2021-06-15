const DivButtons = ({ hideRates, toggleHideRates }) => {

    return (
        <div className="form__display">
            <button className="form__button">Przelicz waluty</button>

            <button
                onClick={toggleHideRates}
                type="button"
                className="form__button"
            >
                {`${hideRates === true ? "Pokaż" : "Ukryj"}`} Kursy
            </button>
        </div>
    );
};

export default DivButtons;