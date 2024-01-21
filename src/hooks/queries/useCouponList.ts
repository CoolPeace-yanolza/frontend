import {
  CouponDeleteCredential,
  CouponToggleCredential,
  CouponUpdateCredential
} from '@/types/couponList';
import { useMutation } from '@tanstack/react-query';
import {
  couponDeleteApi,
  couponToggleApi,
  couponUpdateApi
} from 'src/api/lib/getCouponList';

// 쿠폰 수정
export const useCouponUpdate = () => {
  return useMutation<void, Error, CouponUpdateCredential>({
    mutationFn: couponUpdateApi
  });
};

// 쿠폰 삭제
export const useCouponDelete = () => {
  return useMutation<void, Error, CouponDeleteCredential>({
    mutationFn: couponDeleteApi
  });
};

// 토글
export const useToggleChange = () => {
  return useMutation<void, Error, CouponToggleCredential>({
    mutationFn: couponToggleApi
  });
};
