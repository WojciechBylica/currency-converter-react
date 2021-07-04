import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px 0px;
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    border: ${({ theme }) => theme.elementBorder};
    border-radius: ${({ theme }) => theme.elementBorderRadius};
    padding: 12px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.backgroundColor.mystic};
    box-shadow: 2px 2px 5px #1d1b1b;
`;

export const FormField = styled.select`
    margin: 5px 0;
    width: 100%;
    padding: 5px;
    border-radius: ${({ theme }) => theme.elementBorderRadius};
    border: ${({ theme }) => theme.elementBorder};
    background-color: ${({ theme }) => theme.backgroundColor.melrose};

    &:hover {
        background-color: ${({ theme }) => theme.backgroundColor.melroseHover};
    }
`;

export const Input = styled(FormField)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

export const StyledSpan = styled.span`
    border-radius: ${({ theme }) => theme.elementBorderRadius};
    border: ${({ theme }) => theme.elementBorder};
    background-color: ${({ theme }) => theme.backgroundColor.melrose};
`;