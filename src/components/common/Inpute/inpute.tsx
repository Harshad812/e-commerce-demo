import { InputHTMLAttributes, ReactNode } from "react";
import "./../../../assets/css/inpute.css";

interface InputeProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  icon?: ReactNode;
}

export const Input = (props: InputeProps) => {
  const { label, icon, ...rest } = props;
  return (
    <div className="inputeContainer">
      {label && <span className="label">{label}</span>}
      <div className="inputSection">
        <div className="icon">{icon && icon}</div>
        <input {...rest} />
      </div>
    </div>
  );
};
