import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const Button = styled.button`
    margin: 0;
    background-color: ${({ theme }) => theme.BackgroundColor.Melrose};
    width: 100%;
    border: ${({ theme }) => theme.ElementBorder};
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    padding: 12px;
    font-size: 16px;
    box-shadow: 2px 2px 5px #1d1b1b;

    &:hover {
        background-color: ${({ theme }) => theme.BackgroundColor.MelroseHover};
}
    &:active {
        background-color: ${({ theme }) => theme.BackgroundColor.MelroseActive};
}
`;