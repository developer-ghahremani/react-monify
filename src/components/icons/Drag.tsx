import { IconBaseProps } from "react-icons";
import { MdDragHandle } from "react-icons/md";
import React from "react";
interface Props extends IconBaseProps {}

const DragIcon = (props: Props) => <MdDragHandle {...props} />;

export default DragIcon;
