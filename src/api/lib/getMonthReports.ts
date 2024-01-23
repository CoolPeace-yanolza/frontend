import { instance } from '..';

const getMonthReports = async (id: number) => {
  try {
    const response = await instance.get(`v1/dashboards/${id}/reports/month`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getMonthReports;
