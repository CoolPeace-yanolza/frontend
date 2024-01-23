import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import arrowIcon from '@assets/icons/ic-dashboard-arrow.svg';
import RankingBox from './RankingBox';
import { useGetCouponRanking } from '@hooks/index';
import { headerAccommodationState } from '@recoil/index';

const LocalTop3Coupons = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  const { data } = useGetCouponRanking(headerSelectState.id);

  return (
    <Container>
      <InnerContainer>
        <RankingSection>
          <RankingBox
            rank={1}
            children={data.first_coupon_title}
          />
          <RankingBox
            rank={2}
            children={data.second_coupon_title}
          />
          <RankingBox
            rank={3}
            children={data.third_coupon_title}
          />
        </RankingSection>
        <InformationSection>
          <InformationHeader>우리 지역 쿠폰</InformationHeader>
          <InformationLabel>
            다운로드 <span>Top3</span>
          </InformationLabel>
          <InformationSubText>
            <ArrowIcon
              src={arrowIcon}
              alt="화살표"
            />
            우리 숙소 주변의
            <br />
            인기 쿠폰을 알아보세요
          </InformationSubText>
        </InformationSection>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 16px;
  border-radius: 16px;

  background-color: #fafafb;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 16px;

  display: flex;

  background-color: #fff;

  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
`;

const RankingSection = styled.div`
  position: relative;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
`;

const InformationSection = styled.div`
  width: 48%;

  padding: 14px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  font-weight: 700;

  background-color: #ecf0fa;
`;

const InformationHeader = styled.div`
  padding: 0px 5px 5px 0px;

  color: #415574;
  font-size: 17px;
`;

const InformationLabel = styled.div`
  padding: 10px;
  border-radius: 16px;

  background-color: #fff;

  color: #1a2849;
  text-align: center;
  font-size: 17px;

  box-shadow:
    0px 18.287px 22.859px 0px rgba(0, 0, 0, 0.05),
    -0.762px 0.762px 0.762px -1.524px rgba(255, 255, 255, 0.35) inset;

  & > span {
    color: #4777f0;
  }
`;

const InformationSubText = styled.div`
  padding: 20px 5px 0px 0px;

  color: #374a65;
  font-size: 13.005px;
  text-align: end;
  line-height: 1.4;
`;

const ArrowIcon = styled.img`
  position: relative;
  bottom: -3px;
`;

export default LocalTop3Coupons;
