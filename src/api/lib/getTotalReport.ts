import { instance } from '..';
import { TotalReportResult } from '@/types/report';

const getTotalReport = async (
  accommodation_id: number
): Promise<TotalReportResult> => {
  const response = await instance.get(
    `/v1/dashboards/${accommodation_id}/reports/total`
  );

  return response.data;
};

export default getTotalReport;
