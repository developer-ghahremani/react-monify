import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {
  varient?: "primary" | "secondary";
}

const IButton = ({
  children,
  className,
  varient = "secondary",
  ...props
}: Props) => {
  return (
    <button
      className={`w-full font-bold text-sm p-2 rounded-lg bg-${varient} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default IButton;
