import { ReactNode } from 'react';

// InputContainer
export type InputContainerProps = {
  title: string;
  children: ReactNode;
};

// InputButton
export type InputButtonProps = {
  type: string;
  id: string;
  name: string;
  buttonName: string;
  value?: number;
  onButtonClick?: React.Dispatch<React.SetStateAction<number>>;
};

// InputAccordion
export type InputAccordionProps = {
  title: string;
  content: JSX.Element;
};

export type ButtonStyleProps = {
  $isOpen: boolean;
  src: string;
};

// InputField
export type InputFieldProps = {
  placeholder: string;
  text: string;
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type InputFieldStyleProps = {
  $text: string;
};

// InputCheckBox
export type InputCheckBoxProps = {
  id: string;
  text: string;
  onChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LabelStyleProps = {
  $isChecked: boolean;
};

export type CheckIconStyleProps = {
  $src: string;
};

// InputWrapper
export type InputWrapperProps = {
  whichInput: number;
  currentInput: number;
  children: ReactNode;
};

export type WrapperStyleProps = {
  $isSelected: boolean;
};

// Stepper
export type StepperProps = {
  steps: {
    title: string;
    isCurrent: boolean;
    isCompleted: boolean;
  }[];
  currentStep: number;
};

export type NumberStyleProps = {
  src: string;
};

export type LineStyleProps = {
  $isLastStep: number;
};

// StepperController
export interface StepperControllerProps {
  currentStep: number;
  onButtonClick: React.Dispatch<React.SetStateAction<number>>;
}

// StepTitle
export type StepTitleProps = {
  steps: {
    title: string;
    isCurrent: boolean;
    isCompleted: boolean;
  }[];
  currentStep: number;
};

// FirstStep
export type LimitWrapperStyleProps = {
  $isLimit: boolean;
};
