import { useSuspenseQuery } from '@tanstack/react-query';

import { getTotalReport } from 'src/api';
import { TotalReportResult } from '@/types/report';

const useGetTotalReport = (accommodation_id: number) =>
  useSuspenseQuery<TotalReportResult, Error>({
    queryKey: ['TotalReport', accommodation_id],
    queryFn: () => getTotalReport(accommodation_id)
  });

export default useGetTotalReport;
