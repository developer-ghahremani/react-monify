import Modal, { Props as ModalProps } from "react-modal";

interface Props extends ModalProps {}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const IModal = ({ children, ...props }: Props) => (
  <Modal {...props}>{children}</Modal>
);

export default IModal;
