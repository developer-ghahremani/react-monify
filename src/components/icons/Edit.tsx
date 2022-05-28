import { BiEdit } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import React from "react";
interface Props extends IconBaseProps {}

const EditIcon = (props: Props) => <BiEdit {...props} />;

export default EditIcon;
