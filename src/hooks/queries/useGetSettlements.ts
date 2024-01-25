import { useSuspenseQuery } from '@tanstack/react-query';
import { getSettlements } from 'src/api';

export const useGetSettlements = (
  accommodationId: number,
  start: string, 
  end: string, 
  order: string, 
  page: number, 
  pageSize: number
) =>
  useSuspenseQuery({
    queryKey: ['Settlements', accommodationId, start, end, order, page],
    queryFn: () => getSettlements(accommodationId, start, end, order, page, pageSize)
  });