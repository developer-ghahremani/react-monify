import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<{}> {}

const IInput = ({ className, ...props }: Props) => {
  return <input className={`app-input ${className}`} {...props} />;
};

export default IInput;
