import { SetterOrUpdater } from 'recoil';

import {
  previewAtom,
  registerInputAtom,
  registerValidAtom
} from '@/types/register';

export const showFirstStepValidationMessage = (
  input: registerInputAtom,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  !input.title && setIsValid(prev => ({ ...prev, isTitleValid: false }));
  !input.customerType &&
    setIsValid(prev => ({ ...prev, isCustomerTypeValid: false }));
  !input.discountType &&
    setIsValid(prev => ({ ...prev, isDiscountTypeValid: false }));
  if (input.discountType === '정액 할인') {
    if (input.discountFlat === '' || Number(input.discountFlat) === 0) {
      setIsValid(prev => ({ ...prev, isDiscountFlatValid: false }));
    } else if (Number(input.discountFlat) % 1000) {
      setIsValid(prev => ({ ...prev, isThousands: false }));
    }
  } else if (input.discountType === '정률 할인') {
    if (input.discountFlatRate === '' || Number(input.discountFlatRate) === 0) {
      setIsValid(prev => ({ ...prev, isDiscountFlatRateValid: false }));
    }
  }
};

export const showSecondStepValidationMessage = (
  input: registerInputAtom,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  !input.roomType.length &&
    setIsValid(prev => ({ ...prev, isRoomTypeValid: false }));
  !input.toAllRooms &&
    setIsValid(prev => ({ ...prev, isToAllRoomsValid: false }));
};

export const showThirdStepValidationMessage = (
  input: registerInputAtom,
  setPreview: SetterOrUpdater<previewAtom>
) => {
  !input.minimumPrice && setPreview(prev => ({ ...prev, minimumPrice: '' }));
  (!input.whenToUse || (input.whenToUse === '하루만' && !input.day)) &&
    setPreview(prev => ({ ...prev, day: '' }));
};

export const showFourthStepValidationMessage = (
  input: registerInputAtom,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  if (!input.startDate || !input.endDate) {
    setIsValid(prev => ({ ...prev, isDateValid: false }));
  } else if (input.startDate > input.endDate) {
    setIsValid(prev => ({ ...prev, endDateAfterStartDate: false }));
  }
};

// export const handleStepLessThan3 = (
//   currentStep,
//   input,
//   isFilled,
//   onButtonClick
// ) => {
//   if (
//     currentStep === 0 &&
//     input.discountType === '정액 할인' &&
//     Number(input.discountFlat) % 1000
//   ) {
//     return;
//   } else if (currentStep === 2 || isFilled) {
//     onButtonClick(prev => prev + 1);
//   }
// };
