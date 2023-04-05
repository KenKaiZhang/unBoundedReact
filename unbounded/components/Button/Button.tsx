import React from "react";
import "./Button.css";

export interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { href, label } = props;
  return (
    <a href={href}>
      {" "}
      <p>{label}</p>
    </a>
  );
};

export default Button;
