import { instance } from '..';

export const getCouponList = async () => {
  const result = await instance.get(`/v1/coupons/${accommodation_id}`);
  return result.data;
};
