const Results = ({ result }) => {
          
    return (
        !!result && (
            <p className="form__results">
                {result.amount} {result.currencyFrom} to {result.value.toFixed(2)} {result.currencyTo}</p>
        )
    );
}
export default Results;