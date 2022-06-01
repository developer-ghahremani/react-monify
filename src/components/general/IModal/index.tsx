import Modal, { Props as ModalProps } from "react-modal";

interface Props extends ModalProps {}

const IModal = ({ children, ...props }: Props) => (
  <Modal {...props}>{children}</Modal>
);

export default IModal;
