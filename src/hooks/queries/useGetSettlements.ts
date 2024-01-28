import { useSuspenseQuery } from '@tanstack/react-query';

import { getSettlements } from 'src/api';

export const useGetSettlements = (
  accommodation_id: number,
  start: string, 
  end: string, 
  order: string, 
  page: number, 
  pageSize: number
) =>
  useSuspenseQuery({
    queryKey: ['Settlements', accommodation_id, start, end, order, page],
    queryFn: () => getSettlements(accommodation_id, start, end, order, page, pageSize)
  });