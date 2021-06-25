import styled from "styled-components";

export const Result = styled.p`
    text-align: center;
    width: 100%;
    border: ${({ theme }) => theme.ElementBorder};
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    padding: 12px;
    font-size: 16px;
    margin: 0px 2px;
    background-color: ${({ theme }) => theme.BackgroundColor.ElementBackgroundColorSecondary};
    word-break: break-word;
`;