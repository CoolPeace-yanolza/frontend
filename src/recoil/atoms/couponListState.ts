import { atom } from 'recoil';

import { CouponListResponse } from '@/types/couponList';

const couponListState = atom<CouponListResponse | null>({
  key: 'couponListState',
  default: null
});

export default couponListState;
