import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { registerInputAtom } from '@/types/register';

const { persistAtom } = recoilPersist({
  key: 'registerInputState',
  storage: sessionStorage
});

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
  },
  effects_UNSTABLE: [persistAtom]
});

export default registerInputState;
