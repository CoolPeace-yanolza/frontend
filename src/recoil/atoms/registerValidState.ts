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
    isThousands: true,
    isRoomTypeValid: true,
    isToAllRoomsValid: true,
    isMinimumPriceValid: true,
    isDateValid: true,
    endDateAfterStartDate: true
  }
});

export default registerValidState;
