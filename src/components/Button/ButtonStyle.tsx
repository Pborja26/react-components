import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";
import { Themes } from "../../utils/themes/Themes";
import { Measurement } from "../../utils/GlobalTypes/GlobalTypes";

export const ButtonComponent = styled.button<ButtonProps>`
    display: flex;
    flex-direction: ${props => props.flexdirection};
    width: 100%;
    align-items: ${props => props.alignitems};
    justify-content: ${props => props.justifycontent};
    max-width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    gap: ${props => props.gap};
    border-radius: ${(props) => {
        if (Array.isArray(props.radius)) {
            return props.radius.map((value: Measurement) => `${value}`).join(" ");
        } else {
            return `${props.radius}`;
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