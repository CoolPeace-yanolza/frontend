import { useSuspenseQuery } from '@tanstack/react-query';

import { getYearReport } from 'src/api';
import { YearReportResult } from '@/types/report';

const useGetYearReport = (accommodation_id: number, year: number) =>
  useSuspenseQuery<YearReportResult, Error>({
    queryKey: ['YearReport', accommodation_id, year],
    queryFn: () => getYearReport(accommodation_id, year)
  });

export default useGetYearReport;
