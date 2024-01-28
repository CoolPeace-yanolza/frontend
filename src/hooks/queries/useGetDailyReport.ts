import { useSuspenseQuery } from '@tanstack/react-query';

import { getDailyReport } from 'src/api';

const useGetDailyReport = (accommodation_id: number) => {
  return useSuspenseQuery({
    queryKey: ['DailyReport', accommodation_id],
    queryFn: () => getDailyReport(accommodation_id)
  });
};

export default useGetDailyReport;
