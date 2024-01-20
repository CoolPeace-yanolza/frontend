import { instance } from '..';
import { CouponStatusResults } from '@/types/dashboard';

const getMonthStatus = async (
  accommodation_id: number
): Promise<CouponStatusResults> => {
  const response = await instance.get(
    `v1/dashboards/${accommodation_id}/reports/week`
  );
  return response.data;
};

export default getMonthStatus;
