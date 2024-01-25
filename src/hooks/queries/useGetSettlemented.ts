import { useSuspenseQuery } from '@tanstack/react-query';
import { getSettlemented } from 'src/api';

export const useGetSettlemented = (
  accommodation_id: number,
) =>
  useSuspenseQuery({
    queryKey: ['Settlemented', accommodation_id ],
    queryFn: () => getSettlemented(accommodation_id)
  });