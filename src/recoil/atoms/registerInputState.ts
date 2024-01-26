import { atom } from 'recoil';

import { registerInputAtom } from '@/types/register';

const registerInputState = atom<registerInputAtom>({
  key: 'registerInputState',
  default: {
    title: '',
    customerType: '',
    discountType: '',
    discountFlat: '',
    discountFlatRate: '',
    hasLimit: false,
    maximumDiscount: '',
    roomType: [],
    severalNights: false,
    toAllRooms: '',
    rooms: [],
    minimumPrice: '',
    whenToUse: '',
    day: '',
    startDate: '',
    endDate: ''
  }
});

export default registerInputState;
