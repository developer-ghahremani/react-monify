import { FaHome } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import React from "react";
interface Props extends IconBaseProps {}

const HomeIcon = (props: Props) => <FaHome {...props} />;

export default HomeIcon;
