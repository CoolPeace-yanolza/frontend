import { instance } from '..';
import { LocalCouponUsageResult } from '@/types/dashboard';

const getLocalCouponUsage = async (
  id: number
): Promise<LocalCouponUsageResult> => {
  const response = await instance.get(
    `v1/dashboards/${id}/coupons/local/count`
  );
  return response.data;
};

export default getLocalCouponUsage;
