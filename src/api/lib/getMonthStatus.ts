import { instance } from '..';

const getMonthStatus = async (id: number) => {
  try {
    const response = await instance.get(`v1/dashboards/${id}/reports/week`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getMonthStatus;
