const DivButtons = () => {
    return (
        <div className="form__display">
            <p><button className="form__button">Przelicz waluty</button></p>
            <p><button type="reset" className="form__button js-buttonReset">Wyzeruj
                        dane</button></p>
            <p><button type="button" className="form__button js-buttonShowCurrency">Edytuj kursy</button></p>
        </div>
    );
};

export default DivButtons;