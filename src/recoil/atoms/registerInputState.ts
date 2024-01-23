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
    isAllRoom: '',
    rooms: [],
    minimumPrice: '',
    day: '',
    startDate: '',
    endDate: ''
  }
});

export default registerInputState;
