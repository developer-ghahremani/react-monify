import { AiOutlineDelete } from "react-icons/ai";
import { IconBaseProps } from "react-icons";
import React from "react";
interface Props extends IconBaseProps {}

const DeleteIcon = (props: Props) => <AiOutlineDelete {...props} />;

export default DeleteIcon;
