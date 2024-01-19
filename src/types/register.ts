import { ReactNode, RefObject } from 'react';

// Backdrop
export type BackdropProps = {
  backdropRef: RefObject<HTMLDivElement>;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
};

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
  currentInput?: number;
  onButtonClick?: React.Dispatch<React.SetStateAction<number>>;
};

// InputAccordion
export type InputAccordionProps = {
  title: string;
  children: ReactNode;
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
  onCheck?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LabelStyleProps = {
  $isChecked: boolean;
};

export type CheckIconStyleProps = {
  $src: string;
};

// InputRadio
export type InputRadioProps = {
  id: string;
  name: string;
  text: string;
  children?: ReactNode;
};

export type InputRadioStyleProps = {
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
  $isLimited: boolean;
};

// RoomModal
export type RoomModalProps = {
  value: number;
  setToAllRoom: React.Dispatch<React.SetStateAction<number>>;
  rooms: string[];
  setRooms: React.Dispatch<React.SetStateAction<string[]>>;
  onButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RoomModalStyleProps = {
  $src: string;
};

// RoomSelectButton
export type RoomSelectButtonProps = {
  type: string;
  id: string;
  name: string;
  buttonName: string;
  rooms: number;
  onButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

// RoomList
export type RoomListProps = {
  rooms: string[];
};

// RadioProps
export type RadioProps = {
  id: string;
  name: string;
  text: string;
};
