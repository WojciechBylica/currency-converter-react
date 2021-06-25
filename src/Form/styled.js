import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px 0px;
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    border: 1px solid grey;
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    padding: 12px;
    font-size: 16px;
    background-color: rgb(231 239 239 / 70%);
`;

export const FormField = styled.select`
    margin: 5px 0;
    width: 100%;
    padding: 5px;
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    border: ${({ theme }) => theme.ElementBorder};
    background-color: ${({ theme }) => theme.BackgroundColor.ElementBackgroundColor};

    &:hover {
        background-color: ${({ theme }) => theme.BackgroundColor.ElementBackgroundColorHover};
    }
`;

export const Input = styled(FormField)`
    background-color: ${({ theme }) => theme.BackgroundColor.ElementBackgroundColorSecondary};
`;

export const StyledSpan = styled.span`
    border-radius: ${({ theme }) => theme.ElementBorderRadius};
    border: ${({ theme }) => theme.ElementBorder};
    background-color: ${({ theme }) => theme.BackgroundColor.ElementBackgroundColor};
`;