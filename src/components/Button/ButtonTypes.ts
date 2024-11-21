import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { BorderTypes } from "../../utils/GlobalTypes/GlobalTypes";

type ButtonType = 
  "primary"
| "secondary"
| "close"
| "delete"
| "search"
| "filter"
| "calendar"
| "caret"

type IconPosition = "left" | "right"

type CaretDirection = "up" | "down" | "left" | "right"

export interface ButtonProps {
    type?: ButtonType;
    iconposition?: IconPosition;
    icon?: IconDefinition;
    iconsize?: SizeProp;
    border?: BorderTypes;
    caret?: CaretDirection;
    onClick?: () => void;
    label?: string;
    color?: string;
    textcolor?: string;
    bordercolor?: string;
    hovercolor?: string;
    height?: number;
    width?: number;
    padding?: number | number[];
    gap?: number;
    radius?: number | number[];
    borderwidth?: number | number[];
    disabled?: boolean;
    loading?: boolean;
    caretinvert?: boolean;
}