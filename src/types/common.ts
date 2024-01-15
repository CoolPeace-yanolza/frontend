import { SetStateAction } from 'react';

export type InputNormal = {
  type: string;
  placeholder: string;
  usedFor: string;
  isInvalid: boolean;
};

export type InputPassword = {
  type: string;
  placeholder: string;
  usedFor: string;
  showPW: boolean;
  setShowPW: React.Dispatch<SetStateAction<boolean>>;
  isInvalid: boolean;
};
