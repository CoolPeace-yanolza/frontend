import { useMutation } from '@tanstack/react-query';

// 쿠폰 수정
const useCouponUpdate = () => {
  return useMutation<Error, CouponUpdateListCredential>(couponUpdateApi);
};

// 쿠폰 삭제
const useCouponDelete = () => {
  return useMutation<Error>(couponDeleteApi);
};

// 토글
const useToggleChange = () => {
  return useMutation<Error, CouponStatusCredential>(toggleChangeApi);
};

// 토글 api  요청 타입
export interface CouponStatusCredential {
  coupon_status: string;
}
