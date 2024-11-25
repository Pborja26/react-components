import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { BorderTypes, JustifyContent, AlignItems, FlexDirection, Measurement } from "../../utils/GlobalTypes/GlobalTypes";

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
    justifycontent?: JustifyContent;
    alignitems?: AlignItems;
    flexdirection?: FlexDirection;
    height?: Measurement;
    width?: Measurement;
    padding?:Measurement;
    gap?: Measurement;
    radius?: Measurement;
    borderwidth?: Measurement;
    onClick?: () => void;
    label?: string;
    color?: string;
    textcolor?: string;
    bordercolor?: string;
    hovercolor?: string;
    disabled?: boolean;
    loading?: boolean;
    caretinvert?: boolean;
}