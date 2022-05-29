import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<{}> {
  label?: string;
  inputClassName?: string;
  error?: string;
}

const ITextArea = ({
  className,
  inputClassName,
  label,
  error,
  ...props
}: Props) => {
  return (
    <div className={className}>
      <p>{label}</p>
      <textarea
        className={`app-input !text-right ${
          error ? "!border-red-900" : ""
        } ${inputClassName}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs font-bold text-red-900">{error}</p>}
    </div>
  );
};

export default ITextArea;
