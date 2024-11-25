import { InputComponent } from "./InputStyle";
import { InputProps } from "./InputTypes";

const Input = ({
  type,
  name,
  style,
  value
}: InputProps) => {
  return (
    <InputComponent
      type={type}
      name={name}
      style={style}
      value={value}
    />
  )
}

export default Input;