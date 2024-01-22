import { instance } from '..';
import { DailyReportResult } from '@/types/dashboard';

const getDailyReport = async (id: number): Promise<DailyReportResult> => {
  const response = await instance.get(`v1/dashboards/${id}/reports/daily`);
  return response.data;
};

export default getDailyReport;
