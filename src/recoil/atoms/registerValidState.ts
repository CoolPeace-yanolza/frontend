import { atom } from 'recoil';

import { registerValidAtom } from '@/types/register';

const registerValidState = atom<registerValidAtom>({
  key: 'registerValidState',
  default: {
    isTitleValid: true,
    isCustomerTypeValid: true,
    isDiscountTypeValid: true,
    isDiscountFlatValid: true,
    isDiscountFlatRateValid: true,
    isMaximumDiscountValid: true,
    isThousands: true,
    isRoomTypeValid: true,
    isAllRoomValid: true,
    isMinimumPriceValid: true,
    isDateValid: true
  }
});

export default registerValidState;