type as = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type variant = "bold" | "italic" | "underlined";

export interface LabelProps {
  as: as;
  variant?: variant;
  style?: React.CSSProperties;
  label: string;
  fontfamily?: string;
  fontweight?: number;
  fontsize?: number;
}