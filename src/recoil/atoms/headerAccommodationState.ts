import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { HeaderAccommodation } from '@/types/layout';

const { persistAtom } = recoilPersist();

const headerAccommodationState = atom<HeaderAccommodation>({
  key: 'headerAccommodationState',
  default: {
    id: 0,
    name: '',
    sido_id: 0,
    sido: '',
    sigungu_id: 0,
    sigungu: '',
    address: ''
  },

  effects_UNSTABLE: [persistAtom]
});

export default headerAccommodationState;
