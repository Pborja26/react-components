import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

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

type BorderTypes = 
  "none"
| "dotted"
| "dashed"
| "solid"
| "double"
| "groove"
| "ridge"
| "inset"
| "outset"

export interface ButtonProps {
    type?: ButtonType;
    iconposition?: IconPosition;
    icon?: IconDefinition;
    iconsize?: SizeProp;
    border?: BorderTypes;
    onClick?: () => void;
    label?: string;
    color?: string;
    textcolor?: string;
    bordercolor?: string;
    hovercolor?: string;
    height?: number;
    width?: number;
    padding?: number;
    gap?: number;
    radius?: number | number[];
    disabled?: boolean;
    loading?: boolean;
}