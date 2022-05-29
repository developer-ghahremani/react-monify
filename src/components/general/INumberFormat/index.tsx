import NumberFormat, { NumberFormatProps } from "react-number-format";

import React from "react";

interface Props extends NumberFormatProps {}

const INumberFormat = (props: Props) => (
  <NumberFormat displayType="text" {...props} />
);

export default INumberFormat;
