import { BiArrowBack } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import React from "react";
interface Props extends IconBaseProps {}

const BackIcon = (props: Props) => <BiArrowBack {...props} />;

export default BackIcon;
