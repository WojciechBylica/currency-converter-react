import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const Button = styled.button`
    margin: 0;
    background-color: #efb9b9;
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px;
    font-size: 16px;

    &:hover {
    background-color: #fd6969fa;
}
    &:active {
    background-color: #f35555fa;
}
`;