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
  whichInput: number;
  currentInput: number;
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type InputFieldStyleProps = {
  $text: string;
};

export type InputFieldContainerStyleProps = {
  $isSelected: boolean;
};

// InputCheckBox
export type InputCheckBoxProps = {
  id: string;
  whichInput: number;
  currentInput: number;
  text: string;
  onChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InputCheckBoxContainerStyleProps = {
  $isSelected: boolean;
};

export type LabelStyleProps = {
  $isChecked: boolean;
};

export type CheckIconStyleProps = {
  $src: string;
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
