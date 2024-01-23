import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { useGetLocalCouponUsage } from '@hooks/index';
import { headerAccommodationState } from '@recoil/index';
import reloadIcon from '@assets/icons/ic-dashboard-reload.svg';
import locationIcon from '@assets/icons/ic-dashboard-location.svg';
import bigLocationIcon from '@assets/icons/ic-dashboard-bigLocation.svg';
import gpsIcon from '@assets/icons/ic-dashboard-gps.svg';
import '@components/Dashboard/dashboardKeyframes.css';

const LocalCouponUsage = () => {
  const headerSelectedState = useRecoilValue(headerAccommodationState);
  const { data } = useGetLocalCouponUsage(headerSelectedState.id);
  return (
    <Container>
      <Header>
        <Title>우리 지역 숙소의 쿠폰 현황</Title>
        <Location>
          ｜
          <LocationIcon
            src={locationIcon}
            alt="장소"
          />
          {data.address} 기준
        </Location>
      </Header>
      <UpdateAlarm>
        <ReloadIcon
          src={reloadIcon}
          alt="새로고침"
        />
        매월 1일 00시 00분에 업데이트
      </UpdateAlarm>
      <InnerContainer>
        <InnerContainerHeader>
          <GpsIcon
            src={gpsIcon}
            alt="GPS"
          />
          주변 숙소에서는 어떤 쿠폰을 등록하고 있을까요?
        </InnerContainerHeader>
        <CouponUsage>
          <span>현재 내 숙소 주위의 사장님들이</span>
          <MainInformation>
            평균 {data.coupon_avg}종 이상의 쿠폰을 사용하고 있어요!
          </MainInformation>
          <BigLocationIcon
            src={bigLocationIcon}
            alt="지역"
          />
        </CouponUsage>
      </InnerContainer>
    </Container>
  );
};

export default LocalCouponUsage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  color: #404446;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Location = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
`;

const UpdateAlarm = styled.span`
  padding: 5px;

  display: flex;
  align-items: center;

  color: #6c7072;
  font-size: 11px;
  font-weight: 400;
`;

const InnerContainer = styled.div`
  margin: 15px 0px 0px 10px;
  padding: 20px 10px;
  border-radius: 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  background-color: #fafafb;
`;

const InnerContainerHeader = styled.div`
  width: 100%;

  padding: 15px;
  border-radius: 16px;

  display: flex;
  align-items: center;

  background-color: #ecf0fa;

  color: #1a2849;
  font-size: 15px;
  font-weight: 700;

  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
`;

const CouponUsage = styled.div`
  position: relative;

  width: 98%;

  padding: 30px 20px;
  border-radius: 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;

  color: #202325;
  font-size: 19px;
  font-weight: 700;

  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;

  & > span {
    padding-bottom: 5px;

    color: #404446;
    font-size: 18px;
    font-weight: 700;
  }
`;

const MainInformation = styled.div`
  padding-top: 1px;

  color: #202325;
  font-size: 19px;
  font-weight: 700;

  animation: fadeUp 0.5s;
`;

const LocationIcon = styled.img`
  padding-bottom: 3px;
`;

const ReloadIcon = styled.img`
  padding: 0px 3px 2px 0px;
`;

const BigLocationIcon = styled.img`
  position: absolute;
  right: 10px;
  bottom: 30px;

  width: 120px;
  height: 130px;

  z-index: 10;
`;

const GpsIcon = styled.img`
  padding: 1px 1px 1px 3px;
`;
