import styled from "styled-components";
import { LabelProps } from "./LabelTypes";

export const LabelComponent = styled.div<LabelProps>`
  font-family: ${props => props.fontfamily};
  font-size: ${props => props.fontsize};
`