import { CouponLitResponse } from '@/types/couponList';
import { atom } from 'recoil';

const couponListState = atom<CouponLitResponse | null>({
  key: 'couponListState',
  default: null
});

export default couponListState;
