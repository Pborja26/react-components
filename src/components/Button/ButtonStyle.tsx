import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";
import { Themes } from "../../utils/themes/Themes";

export const ButtonComponent = styled.button<ButtonProps>`
    width: 100%;
    max-width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    gap: ${props => props.gap}px;
    border-radius: ${(props) => {
        if (Array.isArray(props.radius)) {
            return props.radius.map((value: number) => `${value}px`).join(" ");
        } else {
            return `${props.radius}px`;
        }
    }};
    color: ${props => props.disabled ? Themes.text.black : props.textcolor};
    background-color: ${props => props.disabled ? Themes.feedback.disabled : props.color};
    border-style: ${props => props.border};
    border-color: ${props => props.bordercolor};

    &:hover {
        ${(props) => props.disabled ? `
            background-color: ${Themes.feedback.disabled};
        ` : `
            background-color: ${props.hovercolor};
            cursor: pointer;
        `}
    }

    &:active {
        ${(props) => props.disabled ? `` : `
            transform: translate(1px, 1px);
        `}
    }
`