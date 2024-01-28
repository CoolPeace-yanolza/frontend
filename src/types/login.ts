export type LoginFormStyleProps = {
  $isValid: boolean;
};

export type InputValidation = Pick<LoginFormStyleProps, '$isValid'>;

export type LoginFormProps = {
  handleModalOpen: (text: string) => void;
};
