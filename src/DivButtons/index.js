const DivButtons = ({ hideRates, toggleHideRates }) => {

    return (
        <div className="form__display">
            <p><button className="form__button">Przelicz waluty</button></p>
            <p>
                <button
                    onClick={toggleHideRates}
                    type="button"
                    className="form__button"
                >
                    {`${hideRates === true ? "Pokaż" : "Ukryj"}`} Kursy
                </button>
            </p>
        </div>
    );
};

export default DivButtons;