import { useSuspenseQuery } from '@tanstack/react-query';

import { getMonthStatus } from 'src/api';
import { CouponStatusResults } from '@/types/dashboard';

const useGetMonthStatus = (accommodation_id: number) => {
  return useSuspenseQuery<CouponStatusResults>({
    queryKey: ['MonthStatus', accommodation_id],
    queryFn: () => getMonthStatus(accommodation_id)
  });
};

export default useGetMonthStatus;
