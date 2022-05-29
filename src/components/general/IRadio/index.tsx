import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<{}> {
  label: string;
}

const IRadioGroup = (props: Props) => (
  <div className="flex items-center">
    <p>{props.label}</p>
    <input className="mx-2" type="radio" {...props} />
  </div>
);

export default IRadioGroup;
