import { InputHTMLAttributes, ReactNode } from "react";
import "./../../../assets/css/select.css";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  icon?: ReactNode;
  options: string[] | number[];
}

export const Select = (props: SelectProps) => {
  const { label, options, ...rest } = props;
  return (
    <select {...rest}>
      <option>{label}</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
