import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {}

const IButton = ({ children, className, ...props }: Props) => {
  return (
    <button className={`w-full p-2 rounded-lg bg-secondary ${className}`}>
      {children}
    </button>
  );
};

export default IButton;
