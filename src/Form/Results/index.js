import { Result } from "./styled";

const Results = ({ result }) => {

    return (
        !!result && (
            <Result>
                {result.amount} {result.currencyFrom} to {result.value.toFixed(2)} {result.currencyTo}
            </Result>
        )
    );
}
export default Results;