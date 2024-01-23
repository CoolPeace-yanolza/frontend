import { instance } from '..';

import { MonthReportsResults } from '@/types/dashboard';

const getMonthReports = async (id: number): Promise<MonthReportsResults[]> => {
  const response = await instance.get(`v1/dashboards/${id}/reports/month`);
  return response.data.monthly_data_responses;
};

export default getMonthReports;
