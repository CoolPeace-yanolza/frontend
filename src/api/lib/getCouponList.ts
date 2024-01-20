import { instance } from '..';

// 쿠폰 정보 가져오는 api
const getCouponList = async (
  accommodationId: number,
  date?: string,
  status?: string,
  title?: string
) => {
  const params = {
    date: date,
    status: status,
    title: title
  };

  const result = await instance.get(`/v1/coupons/${accommodationId}`, {
    params
  });
  return result.data;
};

export default getCouponList;
