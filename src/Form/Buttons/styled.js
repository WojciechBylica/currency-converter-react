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

    &:hover {
        background-color: ${({ theme }) => theme.BackgroundColor.MelroseHover};
}
    &:active {
        background-color: ${({ theme }) => theme.BackgroundColor.MelroseActive};
}
`;