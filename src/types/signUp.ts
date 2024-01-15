export type SignUpFormStyleProps = {
  $isDisabled: boolean;
  $isInvalid: boolean;
};

export type SignUpDisabledButton = Pick<SignUpFormStyleProps, '$isDisabled'>;
export type SignUpInputValidation = Pick<SignUpFormStyleProps, '$isInvalid'>;
