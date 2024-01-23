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
  value: string;
  isChecked: boolean;
  buttonName: string;
  state?: number;
  currentInput?: number;
  setState?: React.Dispatch<React.SetStateAction<number>>;
  // onButtonClick?: React.Dispatch<React.SetStateAction<number>>;
  onButtonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputFieldStyleProps = {
  $text: string;
};

// InputCheckBox
export type InputCheckBoxProps = {
  id: string;
  text: string;
  onCheck?: () => void;
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
  value: string;
  buttonName: string;
  rooms: number;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  discountFlat: string;
  discountFlatRate: string;
  hasLimit: boolean;
  maximumDiscount: string;
  roomType: string[];
  severalNights: boolean;
  isAllRoom: string;
  rooms?: number[];
  minimumPrice?: string;
  day?: string;
  startDate: string;
  endDate: string;
};

// registerValidState
export type registerValidAtom = {
  isTitleValid: boolean;
  isCustomerTypeValid: boolean;
  isDiscountTypeValid: boolean;
  isDiscountFlatValid: boolean;
  isDiscountFlatRateValid: boolean;
  isThousands: boolean;
  isMaximumDiscountValid: boolean;
  isRoomTypeValid: boolean;
  isAllRoomValid: boolean;
  isMinimumPriceValid: boolean;
  isStartDateValid: boolean;
  isEndDateValid: boolean;
};

export type previewAtom = {
  customer: string;
  discount: string;
  minimumPrice?: string;
  roomType: string;
  toAllRoom: string;
  day: string;
  startDate: string;
  endDate: string;
};
