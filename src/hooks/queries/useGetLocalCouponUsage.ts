import { useSuspenseQuery } from '@tanstack/react-query';

import { getLocalCouponUsage } from 'src/api';

const useGetLocalCouponUsage = (accommodation_id: number) => {
  return useSuspenseQuery({
    queryKey: ['LocalCouponUsage', accommodation_id],
    queryFn: () => getLocalCouponUsage(accommodation_id)
  });
};

export default useGetLocalCouponUsage;
