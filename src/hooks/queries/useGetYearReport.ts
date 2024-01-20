import { useSuspenseQuery } from '@tanstack/react-query';
import { getYearReport } from 'src/api';

// recoil로 쿼리 정보 가져오기
const useGetYearReport = (accommodation_id: number) =>
  useSuspenseQuery({
    queryKey: ['YearReport', accommodation_id],
    queryFn: () => getYearReport(accommodation_id)
  });

export default useGetYearReport;
