import { instance } from '..';
import { YearReportResult } from '@/types/report';

const getYearReport = async (
  accommodation_id: number
  // recoil로 쿼리 정보 가져오기
): Promise<YearReportResult> => {
  const response = await instance.get(
    `/v1/dashboards/${accommodation_id}/reports/year?year=${2023}`
  );

  return response.data;
};

export default getYearReport;
