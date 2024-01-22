import { atom } from 'recoil';

import { registerInputAtom } from '@/types/register';

const registerInputState = atom<registerInputAtom>({
  key: 'registerInputState',
  default: {
    title: '',
    customerType: '',
    discountType: '',
    discountValue: undefined,
    roomType: '',
    isAllRoom: undefined,
    rooms: [],
    minimumPrice: undefined,
    day: '',
    startDate: '',
    endDate: ''
  }
});

export default registerInputState;