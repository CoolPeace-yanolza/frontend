import styled from '@emotion/styled';

import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';
// import { CouponLitResponse } from '@/types/couponList';

const CouponMain = () => {
  // HACK: 쿠폰 데이터 상태저장 (추가 예정)
  // const [coupons, setCoupons] = useState<CouponLitResponse[]>([]);

  return (
    // HACK: 받아온 쿠폰 데이터 종류에 따라 컴포넌트 분리 (추가 예정)
    <MainContainer>
      {/* {coupons.map((coupon, index) => {
        switch (coupon.coupon_status) {
          case '노출 중':
            return (
              <CouponExpose
                key={index}
                couponInfo={coupon}
              />
            );
          case '노출 중지':
            return (
              <CouponStop
                key={index}
                couponInfo={coupon}
              />
            );
          case '노출 대기':
            return (
              <CouponWait
                key={index}
                couponInfo={coupon}
              />
            );
          case '만료':
            return (
              <CouponExpired
                key={index}
                couponInfo={coupon}
              />
            );
        }
      })} */}

      <CouponExpose />
      <CouponStop />
      <CouponExpired />
      <CouponWait />
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
