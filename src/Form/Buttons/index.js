import { ButtonsWrapper, Button } from "./styled";

const Buttons = ({ hideRates, toggleHideRates }) => {
    return (
        <ButtonsWrapper>
            <Button>Przelicz waluty</Button>
            <Button
                onClick={toggleHideRates}
                type="button"
            >
                {`${hideRates ? "Pokaż" : "Ukryj"}`} Kursy
            </Button>
        </ButtonsWrapper>
    );
};
export default Buttons;