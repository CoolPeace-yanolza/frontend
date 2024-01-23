import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';
import couponListState from '@recoil/atoms/couponListState';

const CouponMain = () => {
  const coupons = useRecoilValue(couponListState);

  return (
    <MainContainer>
      {coupons?.content?.map(coupon => {
        switch (coupon.coupon_status) {
          case '노출 ON':
            return (
              <CouponExpose
                key={coupon.coupon_number}
                couponInfo={coupon}
              />
            );
          case '노출 OFF':
            return (
              <CouponStop
                key={coupon.coupon_number}
                couponInfo={coupon}
              />
            );
          case '노출 대기중':
            return (
              <CouponWait
                key={coupon.coupon_number}
                couponInfo={coupon}
              />
            );
          case '노출 기간 만료':
            return (
              <CouponExpired
                key={coupon.coupon_number}
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

  @media (max-width: 900px) {
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
