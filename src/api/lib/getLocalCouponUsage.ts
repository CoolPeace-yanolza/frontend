import { instance } from '..';

const getLocalCouponUsage = async (id: number) => {
  try {
    const response = await instance.get(
      `v1/dashboards/${id}/coupons/local/count`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getLocalCouponUsage;
