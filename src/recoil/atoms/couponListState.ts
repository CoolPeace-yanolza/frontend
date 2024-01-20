import { CouponLitResponse } from '@/types/couponList';
import { atom } from 'recoil';

const couponState = atom<CouponLitResponse | null>({
  key: 'couponState',
  default: null
});

export default couponState;
