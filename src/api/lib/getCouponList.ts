import { instance } from '..';

// 쿠폰 정보 가져오는 api
const getCouponList = async (
  accommodationId: number,
  date?: string,
  status?: string,
  title?: string
) => {
  const params = {
    date: date || '1년', // 기본값
    status: status || '전체',
    title: title || '' // 빈 문자일 경우 검색하지 않음
  };

  const result = await instance.get(`/v1/coupons/${accommodationId}`, {
    params
  });
  return result.data;
};

export default getCouponList;
