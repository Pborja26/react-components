import styled from "styled-components"
import { ContainerProps } from "./ContainerTypes"

export const ContainerComponent = styled.div<ContainerProps>`
  display: ${props => props.display};
  width: 100%;
  height: 100%;
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
  border-style: ${props => props.border};
  border-width: ${(props) => {
    if (Array.isArray(props.borderwidth)) {
      return props.borderwidth.map((value: number) => `${value}px`).join(' ')
    } else {
      return `${props.borderwidth}px`
    }
  }};
  border-radius: ${(props) => {
    if (Array.isArray(props.borderradius)) {
      return props.borderradius.map((value: number) => `${value}px`).join(' ');
    } else {
      return `${props.borderradius}px`
    }
  }};
  padding: ${(props) => {
    if (Array.isArray(props.padding)) {
      return props.padding.map((value: number) => `${value}px`).join(' ');
    } else {
      return `${props.padding}px`
    }
  }};
  margin: ${(props) => {
    if (Array.isArray(props.margin)) {
      return props.margin.map((value: number) => `${value}px`).join(' ');
    } else {
      return `${props.margin}px`
    }
  }};
  background-color: ${props => props.backgroundcolor};
`