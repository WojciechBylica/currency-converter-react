const DivButtons = ({ hideRates, toggleHideRates }) => {

    return (
        <div className="form__display">
            <p><button className="form__button">Przelicz waluty</button></p>
            <p><button type="reset" className="form__button">Wyzeruj
                        dane</button></p>
            <p>
                <button
                    onClick={toggleHideRates}
                    type="button"
                    className="form__button"
                >
                    {`${hideRates === true ? "edytuj" : "ukryj"}`} Kursy
                </button>
            </p>
        </div>
    );
};

export default DivButtons;