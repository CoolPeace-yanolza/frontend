export type LoginFormStyleProps = {
  $isInvalid: boolean;
  $text: string;
};

export type InputValidation = Pick<LoginFormStyleProps, '$isInvalid'>;
export type ButtonText = Pick<LoginFormStyleProps, '$text'>;
