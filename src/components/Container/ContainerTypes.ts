import { 
  BorderTypes,
  JustifyContent,
  AlignItems,
  FlexDirection,
  Display
} from "../../utils/GlobalTypes/GlobalTypes";

export interface ContainerProps {
  border?: BorderTypes;
  justifycontent?: JustifyContent;
  alignitems?: AlignItems;
  direction?: FlexDirection;
  display?: Display;
  width?: number;
  height?: number;
  padding?: number | number[];
  borderradius?: number | number[];
  borderwidth?: number | number[];
  margin?: number | number[];
  backgroundcolor?: string;
  color?: string;
  children?: React.ReactElement | Element | Element[] | React.ReactElement[]
}