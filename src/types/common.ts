export type InputNormal = {
  type: string;
  id: string;
  placeholder: string;
  usedFor: string;
  isInvalid: boolean;
};

export type InputPassword = {
  type: string;
  id: string;
  placeholder: string;
  usedFor: string;
  showPW: boolean;
  setShowPW: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid: boolean;
};
