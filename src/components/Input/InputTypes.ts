type InputTypes = 
  "checkbox"
| "radio"
| "range"
| "text"
| "file"
| "date"
| "email"
| "number"
| "url"
| "password"
| "color"

export interface InputProps {
  type: InputTypes;
  style?: React.CSSProperties;
  name?: string;
  value?: string | number;
  onChange?: () => void;
  onClick?: () => void;
  checked?: boolean;
  height?: number;
  width?: number;
  color?: string;
}