import { instance } from '..';

const getCouponRanking = async (id: number) => {
  try {
    const response = await instance.get(
      `v1/dashboards/${id}/coupons/local/download`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getCouponRanking;
