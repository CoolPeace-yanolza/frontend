import { ReactNode, RefObject } from 'react';

// Backdrop
export type BackdropProps = {
  backdropRef: RefObject<HTMLDivElement>;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
};

// DisplayStep
export type DisplayStepProps = {
  currentStep: number;
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
  state?: number;
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

// ErrorMessage
export type ErrorMessageProps = {
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

// SecondStep
export type RoomType = {
  id: number;
  roomNumber: number;
  roomType: string;
  price: number;
};

export type RoomsType = RoomType[];

// RoomSelectModal
export type RoomSelectModalProps = {
  value: number;
  setToAllRoom: React.Dispatch<React.SetStateAction<number>>;
  rooms: RoomsType;
  setRooms: React.Dispatch<React.SetStateAction<RoomsType>>;
  onButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RoomSelectModalStyleProps = {
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
  rooms: RoomsType;
};

// RadioProps
export type RadioProps = {
  id: string;
  name: string;
  text: string;
};

// registerInputState
export type registerInputAtom = {
  title: string;
  customerType: string;
  discountType: string;
  discountValue: undefined | number;
  roomType: string;
  isAllRoom: undefined | boolean;
  rooms?: number[];
  minimumPrice?: undefined | number;
  day?: string;
  startDate: string;
  endDate: string;
};

// registerValidState
export type registerValidAtom = {
  isTitleValid: boolean;
  isCustomerTypeValid: boolean;
  isDiscountTypeValid: boolean;
  isThousands: boolean;
  isRoomTypeValid: boolean;
  isAllRoomValid: boolean;
  isRoomsValid: boolean;
  isStartDateValid: boolean;
  isEndDateValid: boolean;
};
