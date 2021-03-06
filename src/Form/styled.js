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
    box-shadow: 2px 2px 5px #1d1b1b;
`;

export const FormField = styled.select`
    margin: 5px 0;
    width: 100%;
    padding: 5px;
    border-radius: ${({ theme }) => theme.elementBorderRadius};
    border: ${({ theme }) => theme.elementBorder};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    cursor: pointer;
`;

export const Input = styled(FormField)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    cursor: text;
`;

export const AnimatedDollar = styled.span`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    width: 100px;
    height: 100px;
    color: #e0e075;
    text-shadow: 2px 2px 4px gold;
    background: #ffff0030;
    border: 2px solid #ffd700f7;
    border-radius: 100px;
    box-shadow: 0 2px 1px #ffd70000;
    animation-name: rotationSafari;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
    user-select: none;

    &:hover {
        animation-play-state: paused;
    }

    @keyframes rotationSafari {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        50% {
            transform: rotate3d(0, 1, 0, 180deg);
        }
        100% {
            transform: rotate3d(0, 1, 0, 360deg);
        }
    }
`;