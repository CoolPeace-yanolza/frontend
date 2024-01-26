import { instance } from '..';
import { YearReportResult } from '@/types/report';

const getYearReport = async (
  accommodation_id: number,
  year: number
): Promise<YearReportResult> => {
  const response = await instance.get(
    `/v1/dashboards/${accommodation_id}/reports/year?year=${year}`
  );

  return response.data;
};

export default getYearReport;
