import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';
import couponListState from '@recoil/atoms/couponListState';
import theme from '@styles/theme';
import mobileRegister from '@assets/icons/ic-couponlist-mobileregister.svg';
import categoryTabState from '@recoil/atoms/categoryTabState';

const CouponMain = () => {
  const navigate = useNavigate();
  const coupons = useRecoilValue(couponListState);
  const categoryTab = useRecoilValue(categoryTabState);
  console.log(coupons);

  const handleRegisterClick = () => {
    navigate('/coupons/register');
  };

  return (
    <MainContainer>
      <TabBottomWrap>
        <SecondTabName>{categoryTab.categoryTab}</SecondTabName>
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
      <MobileRegister onClick={handleRegisterClick}>
        <img
          src={mobileRegister}
          alt="모바일 등록 버튼 이미지"
        />
        <p>쿠폰 등록하기</p>
      </MobileRegister>
    </MainContainer>
  );
};

export default CouponMain;

const MainContainer = styled.div`
  margin-left: 25px;
  margin-bottom: 30px;

  display: flex;
  flex-flow: row wrap;
  gap: 25px;

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

  @media (max-width: 656px) {
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

  @media (max-width: 656px) {
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

  @media (max-width: 656px) {
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

  @media (max-width: 656px) {
    font-size: 10.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    width: 220px;
  }
`;

const MobileRegister = styled.div`
  display: none;

  @media (max-width: 656px) {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 15px;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;

    p {
      position: absolute;
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 600;
      margin-left: 68px;
      margin-top: 23px;
    }
  }
`;
