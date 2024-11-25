import { ProgressBarProps } from "./ProgressBarTypes";
import { Bar } from "./ProgressBarStyle";

const ProgressBar = ({
  values,
  total,
  showvalues,
  size,
  direction,
  customcolors
}: ProgressBarProps) => {
  const getPercentage = (value: number) => (value/total) * 100;
  

}