import { TableWrapper, StyledTable ,StyledCaption, StyledRow, StyledCurrency } from "./styled";

const Rates = ({rates, ratesData}) => (
    <TableWrapper>
        <StyledTable>
            <StyledCaption>{ratesData.table}</StyledCaption>
            <thead>
                <StyledRow>
                    <th>waluta</th>
                    <th>symbol</th>
                    <th>średni kurs</th>
                </StyledRow>
            </thead>
            <tbody>
                {Object.keys(rates).slice(1).map(rate =>
                    <StyledRow key={rate}>
                        <StyledCurrency>{rates[rate].currency}</StyledCurrency>
                        <td>{rates[rate].code}</td>
                        <td> {rates[rate].mid}</td>
                    </StyledRow>
                )
                }
            </tbody>
        </StyledTable>
    </TableWrapper>
);

export default Rates;