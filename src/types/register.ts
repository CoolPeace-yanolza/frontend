import { ReactNode } from 'react';

// InputContainer
export type InputContainerProps = {
  description: string;
  children: ReactNode;
};

// InputButton
export type InputButtonProps = {
  type: string;
  id: string;
  name: string;
  buttonName: string;
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
