import React, { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<{}> {
  options: OptionHTMLAttributes<{}>[];
  label?: string;
  selectClassName?: string;
  error?: string;
  touched?: boolean;
  extra?: string | JSX.Element;
}

const ISelect = ({
  options,
  selectClassName,
  className,
  error,
  touched,
  extra,
  ...props
}: Props) => (
  <div className={className}>
    <div className="flex justify-between items-center">
      <p>{props.label}</p>
      {typeof extra === "string" ? <p>{extra}</p> : extra}
    </div>

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
