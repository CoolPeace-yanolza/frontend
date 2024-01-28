import { SetterOrUpdater } from 'recoil';

import { registerValidAtom } from '@/types/register';

export const validateTitle = (
  title: string,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  if (!title) {
    setIsValid(prev => ({ ...prev, isTitleValid: false }));
  } else {
    setIsValid(prev => ({ ...prev, isTitleValid: true }));
  }
};

export const validateCustomerType = (
  customerType: string,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  if (!customerType) {
    setIsValid(prev => ({ ...prev, isCustomerTypeValid: false }));
  } else {
    setIsValid(prev => ({ ...prev, isCustomerTypeValid: true }));
  }
};

export const validateDiscountType = (
  discountType: string,
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  if (!discountType) {
    setIsValid(prev => ({ ...prev, isDiscountTypeValid: false }));
  } else {
    setIsValid(prev => ({
      ...prev,
      isDiscountTypeValid: true,
      isDiscountFlatValid: true,
      isDiscountFlatRateValid: true,
      isThousands: true
    }));
  }
};

export const validateDiscountFlat = (
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  setIsValid(prev => ({
    ...prev,
    isDiscountFlatValid: true,
    isThousands: true
  }));
};

export const validateDiscountFlatRate = (
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  setIsValid(prev => ({
    ...prev,
    isDiscountFlatRateValid: true,
    isThousands: true
  }));
};

export const validateLabel = (
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  setIsValid(prev => ({
    ...prev,
    isDiscountFlatRateValid: true,
    isThousands: true
  }));
};

export const validateMaximumDiscount = (
  setIsValid: SetterOrUpdater<registerValidAtom>
) => {
  setIsValid(prev => ({
    ...prev,
    isDiscountFlatRateValid: true
  }));
};
