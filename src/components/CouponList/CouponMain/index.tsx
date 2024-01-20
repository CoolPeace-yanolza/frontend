import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';

const CouponMain = () => {
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
