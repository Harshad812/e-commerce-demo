import { InputHTMLAttributes, ReactNode } from "react";
import "./../../../assets/css/select.css";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  icon?: ReactNode;
  options: ReactNode[];
}

export const Select = (props: SelectProps) => {
  const { label, options, ...rest } = props;
  return (
    <select {...rest}>
      <option>{label}</option>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
