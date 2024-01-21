import { atom } from 'recoil';

import { registerValidAtom } from '@/types/register';

const registerValidState = atom<registerValidAtom>({
  key: 'registerValidState',
  default: {
    isTitleValid: true,
    isCustomerTypeValid: true,
    isDiscountTypeValid: true,
    isThousands: true,
    isRoomTypeValid: true,
    isAllRoomValid: true,
    isRoomsValid: true,
    isStartDateValid: true,
    isEndDateValid: true
  }
});

export default registerValidState;
