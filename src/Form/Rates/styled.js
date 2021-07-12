import styled from "styled-components";

export const TableWrapper = styled.div`
    overflow: auto;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const StyledCaption = styled.caption`
    caption-side: bottom;
    margin-top: 10px;
`;

export const StyledRow = styled.tr`
    border-bottom: 1px solid black;

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.backgroundColor.moonRaker};
    };

    &:hover{
        background-color: ${({ theme }) => theme.backgroundColor.melroseActive};
    };
`;

export const StyledCurrency = styled.th`
font-weight: normal;
`;