export type SignUpFormStyleProps = {
  $isValid?: boolean;
};

export type SignUpInputValidation = Pick<SignUpFormStyleProps, '$isValid'>;

export type SignUpData = {
  email: string;
  password: string;
  name: string;
};
