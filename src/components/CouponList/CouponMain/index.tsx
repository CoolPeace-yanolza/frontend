import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';
import couponListState from '@recoil/atoms/couponListState';
import theme from '@styles/theme';

const CouponMain = () => {
  const coupons = useRecoilValue(couponListState);
  console.log(coupons);

  return (
    <MainContainer>
      <TabBottomWrap>
        <SecondTabName>{}</SecondTabName>
        <SecondTabCount>{coupons?.content.length}개</SecondTabCount>
        <CouponDescription>
          모든 쿠폰은 다운로드 후 14일까지 사용 가능하며, 등록 후 1년이 경과한
          쿠폰은 조회되지 않습니다.
        </CouponDescription>
      </TabBottomWrap>
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
    margin: 20px 20px 0px 20px;
    border-radius: 10px;
    padding-bottom:30px;
    display: flex;
    justify-content: center;
    gap: 27px;
    align-items: center;
    background-color: ${theme.colors.white};
`;

const TabBottomWrap = styled.div`
  display: none;

  @media (max-width: 630px) {
    margin: 20px 28px -5px 28px;
    display: flex;
    align-items: center;
  }
`;

const SecondTabName = styled.div`
  margin-right: 5px;

  color: #a4a4a4;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 630px) {
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const SecondTabCount = styled.div`
  margin-right: 19px;

  color: #1a2849;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 630px) {
    leading-trim: both;

    text-edge: cap;
    font-family: 'Noto Sans KR';
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const CouponDescription = styled.div`
  color: #a4a4a4;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 630px) {
    font-size: 10.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    width: 220px;
  }
`;
