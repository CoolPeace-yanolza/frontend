import { instance } from '..';
import { CouponRankingResult } from '@/types/dashboard';

const getCouponRanking = async (id: number): Promise<CouponRankingResult> => {
  const response = await instance.get(
    `v1/dashboards/${id}/coupons/local/download`
  );
  return response.data;
};

export default getCouponRanking;
