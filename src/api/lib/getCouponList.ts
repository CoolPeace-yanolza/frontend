import {
  CouponDeleteCredential,
  CouponListResponse,
  CouponToggleCredential,
  CouponUpdateCredential
} from '@/types/couponList';
import { instance } from '..';

// 쿠폰 정보 가져오는 api
export const getCouponList = async (
  accommodationId: number,
  date?: string,
  status?: string,
  title?: string,
  page?: number
): Promise<CouponListResponse> => {
  const params = {
    date,
    status,
    title,
    page
  };
  const response = await instance.get(
    `/v1/accommodations/${accommodationId}/coupons`,
    {
      params
    }
  );
  return response.data;
};

// 쿠폰 수정 api
export const couponUpdateApi = async (credential: CouponUpdateCredential) => {
  const couponNumber = credential.coupon_number;
  const response = await instance.put(
    `/v1/coupons/${couponNumber}`,
    credential
  );
  return response.data;
};

// 쿠폰 삭제 api
export const couponDeleteApi = async (
  credential: CouponDeleteCredential
): Promise<void> => {
  const couponNumber = credential.coupon_number;
  const response = await instance.delete(`/v1/coupons/${couponNumber}`);
  return response.data;
};

// // 토클 on/off api
// export const couponToggleApi = async (credential: CouponToggleCredential) => {
//   const couponNumber = credential.coupon_number;
//   const response = await instance.put(
//     `/v1/coupons/${couponNumber}/expose`,
//     credential
//   );
//   return response.data;
// };

export const couponToggleApi = async (credential: CouponToggleCredential) => {
  const couponNumber = credential.coupon_number;
  await new Promise(resolve => setTimeout(resolve, 500));
  const response = await instance.put(
    `/v1/coupons/${couponNumber}/expose`,
    credential
  );

  return response.data;
};
