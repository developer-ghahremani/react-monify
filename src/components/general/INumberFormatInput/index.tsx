import NumberFormat, { NumberFormatProps } from "react-number-format";

import React from "react";

interface Props extends NumberFormatProps {
  label: string;
  error?: string;
  inputClassName?: string;
  touched?: boolean;
}

const INumberFormat = ({
  className,
  label,
  error,
  inputClassName,
  touched,
  ...props
}: Props) => {
  return (
    <div className={className}>
      <p>{label}</p>
      <NumberFormat
        displayType="input"
        className={`app-input !font-vazir h-auto !py-2 ${inputClassName}`}
        style={{ direction: "ltr" }}
        {...props}
      />
      {touched && error && (
        <p className="mt-1 text-xs font-bold text-red-900">{error}</p>
      )}
    </div>
  );
};

export default INumberFormat;
