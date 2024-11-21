import { ContainerProps } from "./ContainerTypes";
import { ContainerComponent } from "./ContainerStyle";

const Container = ({
  children,
  border,
  justifycontent,
  alignitems,
  direction,
  display,
  width,
  height,
  padding,
  borderradius,
  borderwidth,
  margin,
  backgroundcolor,
  color
}: ContainerProps) => {
  return (
    <ContainerComponent
      border={border}
      justifycontent={justifycontent}
      alignitems={alignitems}
      direction={direction}
      display={display}
      width={width}
      height={height}
      padding={padding}
      borderradius={borderradius}
      borderwidth={borderwidth}
      margin={margin}
      backgroundcolor={backgroundcolor}
      color={color}
    >
      {children}
    </ContainerComponent>
  )
}

export default Container;