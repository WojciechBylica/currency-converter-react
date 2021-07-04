import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px 0px;
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    border: ${({ theme }) => theme.ElementBorder};
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    padding: 12px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.BackgroundColor.Mystic};
    box-shadow: 2px 2px 5px #1d1b1b;
`;

export const FormField = styled.select`
    margin: 5px 0;
    width: 100%;
    padding: 5px;
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    border: ${({ theme }) => theme.ElementBorder};
    background-color: ${({ theme }) => theme.BackgroundColor.Melrose};

    &:hover {
        background-color: ${({ theme }) => theme.BackgroundColor.MelroseHover};
    }
`;

export const Input = styled(FormField)`
    background-color: ${({ theme }) => theme.BackgroundColor.White};
`;

export const StyledSpan = styled.span`
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    border: ${({ theme }) => theme.ElementBorder};
    background-color: ${({ theme }) => theme.BackgroundColor.Melrose};
`;