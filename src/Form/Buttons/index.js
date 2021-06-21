import "./style.css";

const Buttons = ({ hideRates, toggleHideRates }) => {

    return (
        <div className="buttons">
            <button className="buttons__button">Przelicz waluty</button>

            <button
                onClick={toggleHideRates}
                type="button"
                className="buttons__button"
            >
                {`${hideRates === true ? "Pokaż" : "Ukryj"}`} Kursy
            </button>
        </div>
    );
};

export default Buttons;