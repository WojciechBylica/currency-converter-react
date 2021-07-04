import styled from "styled-components";

export const Result = styled.p`
    text-align: center;
    width: 100%;
    border: ${({ theme }) => theme.elementBorder};
    border-radius: ${({ theme }) => theme.elementBorderRadius};
    padding: 12px;
    font-size: 16px;
    margin: 0px 2px;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    word-break: break-word;
`;