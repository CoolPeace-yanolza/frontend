export type ModalContent = {
  text: string;
  errorText: string;
};

export type ErrorModalProps = {
  modalContent: ModalContent;
  ButtonFunc: () => void;
};
