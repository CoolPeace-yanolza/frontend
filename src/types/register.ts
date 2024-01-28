import { ReactNode, RefObject } from 'react';

// Backdrop
export type BackdropProps = {
  backdropRef?: RefObject<HTMLDivElement>;
  onBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
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
  onButtonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// InputAccordion
export type InputAccordionProps = {
  title: string;
  value: string | undefined;
  children: ReactNode;
};

export type ButtonStyleProps = {
  $isOpen: boolean;
  src: string;
};

// InputField
export type InputFieldProps = {
  placeholder: string;
  defaultValue?: string;
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
  isChecked: boolean;
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
  value?: string;
  isChecked: boolean;
  text: string;
  children?: ReactNode;
  onButtonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputRadioStyleProps = {
  $src: string;
};

// InputWrapper
export type InputWrapperProps = {
  state?: string;
  currentState?: string;
  isSelected?: boolean;
  children: ReactNode;
};

// ErrorMessage
export type ErrorMessageProps = {
  children: ReactNode;
};

// Preview
export type DayStyleProps = {
  $hasValue: boolean;
};

// Stepper
export type StepperProps = {
  steps: {
    title: string;
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
export type StepperControllerProps = {
  currentStep: number;
  isFilled: boolean;
  onButtonClick: React.Dispatch<React.SetStateAction<number>>;
};

export type PreviousButtonStyleProps = {
  $currentStep: number;
};

export type NextButtonStyleProps = {
  $isFilled: boolean;
};

// StepTitle
export type StepTitleProps = {
  steps: {
    title: string;
  }[];
  currentStep: number;
};

// FirstStep
export type LimitWrapperStyleProps = {
  $hasLimit: boolean;
};

// SecondStep
export type RoomType = {
  id: number;
  roomNumber: string;
  roomType: string;
  price: number;
};

// RoomSelectModal
export type RoomSelectModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  isChecked: boolean;
  buttonName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// RoomList
export type RoomListProps = {
  rooms: RoomType[];
};

// Radio
export type RadioProps = {
  id: string;
  name: string;
  value: string;
  isChecked: boolean;
  text: string;
  onButtonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// FourthStep
export type CalendarWrapperStyleProps = {
  $isSelected: boolean;
};

// CustomInput
export type CustomInputProps = {
  value?: string;
  onClick: () => void;
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
  toAllRooms: string;
  rooms: RoomType[];
  selectedRooms: RoomType[];
  minimumPrice?: string;
  whenToUse: string;
  day: string;
  startDate: string;
  endDate: string;
  isModalOpen: boolean;
};

// registerValidState
export type registerValidAtom = {
  isTitleValid: boolean;
  isCustomerTypeValid: boolean;
  isDiscountTypeValid: boolean;
  isDiscountFlatValid: boolean;
  isDiscountFlatRateValid: boolean;
  isThousands: boolean;
  isRoomTypeValid: boolean;
  isToAllRoomsValid: boolean;
  isMinimumPriceValid: boolean;
  isDateValid: boolean;
  endDateAfterStartDate: boolean;
};

// previewState
export type previewAtom = {
  customer: string;
  discount: string;
  minimumPrice?: string;
  roomType: string[];
  toAllRooms: string;
  day: string;
  startDate: string;
  endDate: string;
};

// postRegisterCoupon
export type PostRegisterCouponProps = {
  registerInfo: {
    title: string;
    customer_type: string;
    discount_type: string;
    discount_flat_value: number;
    discount_flat_rate: number;
    maximum_discount_price: number;
    coupon_room_types: string[];
    accommodation_id: number;
    register_all_room: boolean;
    register_rooms: string[];
    minimum_reservation_price: number;
    coupon_use_condition_days: string;
    coupon_use_condition_day_of_week: string;
    exposure_start_date: string;
    exposure_end_date: string;
  };
};

// useGetRoomList
export type RoomListType = {
  room_responses: {
    id: number;
    room_number: string;
    room_type: string;
    price: number;
  }[];
};
