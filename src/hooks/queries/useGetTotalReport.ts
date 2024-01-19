import { useSuspenseQuery } from '@tanstack/react-query';
import getTotalReport from 'src/api/lib/getTotalReport';

export const useGetTotalReport = (accommodation_id: number) =>
  useSuspenseQuery({
    queryKey: ['TotalReport', accommodation_id],
    queryFn: () => getTotalReport(accommodation_id)
  });
