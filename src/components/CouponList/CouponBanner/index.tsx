import styled from '@emotion/styled';

import theme from '@styles/theme';
import bannerIcon from '@assets/icons/ic-couponlist-speaker.svg';

const CouponBanner = () => {
  return (
    <BannerContainer>
      <TabBanner>
        <img
          src={bannerIcon}
          alt="bannerIcon"
        />
        <div>
          <TabBannerTitle>이번 달 우리 지역 인기 쿠폰</TabBannerTitle>
          <TabBannerContent>
            OO구에서 가장 많이 사용된 쿠폰은? 재방문 고객 20% 할인쿠폰 이에요!
          </TabBannerContent>
        </div>
      </TabBanner>
    </BannerContainer>
  );
};

export default CouponBanner;

const BannerContainer = styled.div`
  margin: 20px 50px;
`;

const TabBanner = styled.div`
  height: 83px;

  display: flex;
  align-items: center;

  padding-left: 20px;
  border-radius: 12px;
  background: #1a2849;

  color: ${theme.colors.white};
  font-size: 17px;
  gap: 10px;
`;

const TabBannerTitle = styled.div`
  font-size: 12px;
  font-style: normal;
  margin-bottom: 6px;
`;
const TabBannerContent = styled.div`
  font-size: 17px;
  font-style: normal;
`;
