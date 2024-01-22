import { useSuspenseQuery } from '@tanstack/react-query';

import { getMonthReports } from 'src/api';

export const useGetMonthReports = (accommodation_id: number) => {
  return useSuspenseQuery({
    queryKey: ['MonthReports', accommodation_id],
    queryFn: () => getMonthReports(accommodation_id)
  });
};
