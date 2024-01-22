import styled from '@emotion/styled';
import theme from '@styles/theme';

import bannerIcon from '@assets/icons/ic-couponlist-speaker.svg';
import { useRecoilValue } from 'recoil';
import { headerAccommodationState } from '@recoil/index';
import { useGetCouponRanking } from '@hooks/queries/useGetCouponRanking';

const CouponBanner = () => {
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const sigunguData = headerAccommodation.sigungu;
  const { data } = useGetCouponRanking(headerAccommodation.id);
  console.log(sigunguData, data.first_coupon_title);

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
            {sigunguData}구에서 가장 많이 사용된 쿠폰은?
            {data.first_coupon_title}
            할인쿠폰 이에요!
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
