import { instance } from '..';

const getDailyReport = async (id: number) => {
  try {
    const response = await instance.get(`v1/dashboards/${id}/reports/daily`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getDailyReport;
