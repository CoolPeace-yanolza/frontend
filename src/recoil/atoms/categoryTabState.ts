import { atom } from 'recoil';

import { CategoryTab } from '@/types/couponList';

const categoryTabState = atom<CategoryTab>({
  key: 'categoryTabState',
  default: { categoryTab: '전체' }
});

export default categoryTabState;
