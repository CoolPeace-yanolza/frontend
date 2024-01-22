import { useSuspenseQuery } from '@tanstack/react-query';

import { getCouponRanking } from 'src/api';

export const useGetCouponRanking = (accommodation_id: number) => {
  return useSuspenseQuery({
    queryKey: ['CouponRanking', accommodation_id],
    queryFn: () => getCouponRanking(accommodation_id)
  });
};
