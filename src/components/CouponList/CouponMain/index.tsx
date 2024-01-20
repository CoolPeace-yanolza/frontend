import styled from '@emotion/styled';

import { CouponLitResponse } from '@/types/couponList';
import { useEffect, useState } from 'react';
import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';
import { useRecoilValue } from 'recoil';
import { headerAccommodationState } from '@recoil/index';
import { getCouponList } from 'src/api';

const CouponMain = () => {
  const [coupons, setCoupons] = useState<CouponLitResponse | null>(null);
  const headerAccommodation = useRecoilValue(headerAccommodationState);

  // recoil 숙소 ID 가져오기
  const fetchCoupons = async () => {
    try {
      const couponData = await getCouponList(
        headerAccommodation.accommodationId
      );
      setCoupons(couponData);
      console.log(couponData);
    } catch (error) {
      console.log('쿠폰 정보 가져오기 에러 ', error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [headerAccommodation.accommodationId]);

  return (
    <MainContainer>
      {coupons?.content.map((coupon, index) => {
        switch (coupon.coupon_status) {
          case '노출 ON':
            return (
              <CouponExpose
                key={index}
                couponInfo={coupon}
              />
            );
          case '노출 OFF':
            return (
              <CouponStop
                key={index}
                couponInfo={coupon}
              />
            );
          case '노출 대기중':
            return (
              <CouponWait
                key={index}
                couponInfo={coupon}
              />
            );
          case '노출 기간 만료':
            return (
              <CouponExpired
                key={index}
                couponInfo={coupon}
              />
            );
        }
      })}
    </MainContainer>
  );
};

export default CouponMain;

const MainContainer = styled.div`
  margin-left: 50px;
  margin-bottom: 30px;

  display: flex;
  flex-flow: row wrap;
  gap: 36px;
`;
