import { MenuItem, MenuItemProps, Select, SelectProps } from "@mui/material";
import React, { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<{}> {
  options: OptionHTMLAttributes<{}>[];
  label?: string;
  selectClassName?: string;
  error?: string;
  touched?: boolean;
}

const ISelect = ({
  options,
  selectClassName,
  className,
  error,
  touched,
  ...props
}: Props) => (
  <div className={className}>
    <p>{props.label}</p>

    <select
      className={`app-select ${
        error ? "!border-red-900" : ""
      } ${selectClassName}`}
      {...props}>
      {options.map(({ children, ...item }) => (
        <option {...item}>{children}</option>
      ))}
    </select>
    {touched && error && (
      <p className="mt-1 text-xs font-bold text-red-900">{error}</p>
    )}
  </div>
);

export default ISelect;
