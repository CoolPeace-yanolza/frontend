export type AuthInputNormal = {
  type: string;
  id: string;
  placeholder: string;
  usedFor: string;
  isInvalid: boolean;
};

export type AuthInputPassword = {
  type: string;
  id: string;
  placeholder: string;
  usedFor: string;
  showPW: boolean;
  setShowPW: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid: boolean;
};

// TODO : API 연결 후 타입 변경 예정
export type LoginAPIButton = () => void;
export type SignUpAPIButton = () => void;
export type EmailValidCheckAPIButton = () => void;
export type MoveToSignUpButton = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;

export type AuthButton = {
  size: string;
  variant: string;
  text: string;
  buttonFunc:
    | LoginAPIButton
    | SignUpAPIButton
    | EmailValidCheckAPIButton
    | MoveToSignUpButton;
};
