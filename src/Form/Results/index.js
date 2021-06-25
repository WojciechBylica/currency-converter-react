import { Result } from "./styled";

const Results = ({ result }) => (
    !!result && (
        <Result>
            {result.amount} {result.currencyFrom} to {result.value.toFixed(2)} {result.currencyTo}
        </Result>
    )
);

export default Results;