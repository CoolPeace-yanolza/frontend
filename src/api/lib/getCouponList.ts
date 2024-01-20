import { instance } from '..';

// 쿠폰 정보 가져오는 api
export const getCouponList = async (accommodationId: number) => {
  const result = await instance.get(`/v1/coupons/${accommodationId}`);
  return result.data;
};
