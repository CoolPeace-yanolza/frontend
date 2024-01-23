import { useSuspenseQuery } from '@tanstack/react-query';

import { getMonthReports } from 'src/api';

const useGetMonthReports = (accommodation_id: number) => {
  return useSuspenseQuery({
    queryKey: ['MonthReports', accommodation_id],
    queryFn: () => getMonthReports(accommodation_id)
  });
};

export default useGetMonthReports;
