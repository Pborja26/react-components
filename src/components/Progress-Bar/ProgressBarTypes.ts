export interface ProgressBarProps {
  direction?: "vertical" | "horizontal";
  showvalues?: boolean;
  customcolors?: string | string[];
  values: number | number[];
  total: number;
  size?: number;
}