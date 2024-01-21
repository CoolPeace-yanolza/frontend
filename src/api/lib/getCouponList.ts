import {
  CouponListResponse,
  GetCouponListCredential
} from '@/types/couponList';
import { instance } from '..';

// 쿠폰 정보 가져오는 api
const getCouponList = async ({
  accommodationId,
  date,
  status,
  title
}: GetCouponListCredential): Promise<CouponListResponse> => {
  const params = {
    date,
    status,
    title
  };

  const response = await instance.get(`/v1/coupons/${accommodationId}`, {
    params
  });
  return response.data;
};

export default getCouponList;
