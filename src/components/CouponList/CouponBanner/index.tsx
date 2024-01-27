import styled from '@emotion/styled';
import theme from '@styles/theme';

import bannerIcon from '@assets/icons/ic-couponlist-speaker.svg';
import { useRecoilValue } from 'recoil';
import { headerAccommodationState } from '@recoil/index';
import { useGetCouponRanking } from '@hooks/index';

const CouponBanner = () => {
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const sigunguData = headerAccommodation.sigungu;
  const { data } = useGetCouponRanking(headerAccommodation.id);

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
            {sigunguData}에서 가장 많이 다운로드된 쿠폰은?
            <span>{data.first_coupon_title}쿠폰</span>이에요!
          </TabBannerContent>
        </div>
      </TabBanner>
    </BannerContainer>
  );
};

export default CouponBanner;

const BannerContainer = styled.div`
  margin: 20px 25px;

  @media (max-width: 656px) {
    display: none;
  }
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
  font-weight: 500;
  margin-bottom: 6px;
`;
const TabBannerContent = styled.div`
  font-size: 17px;
  font-style: normal;
  font-weight: 500;

  span {
    margin: 0px 5px;
    border-bottom: 1px solid;
  }
`;
