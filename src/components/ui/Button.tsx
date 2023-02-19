import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, className, disabled, ...rest }: Props) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
