import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px 0px;
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px;
    font-size: 16px;
    background-color: rgb(231 239 239 / 70%);
`;

export const FormField = styled.select`
    margin: 5px 0;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid grey;
    background-color: #efb9b9;

    &:hover {
        background-color: #fd6969fa;
    }
`;

export const Input = styled(FormField)`
    background-color: white;
`;
