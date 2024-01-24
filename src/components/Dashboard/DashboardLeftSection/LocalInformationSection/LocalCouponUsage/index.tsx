import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import theme from '@styles/theme';
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
        <MobileHeader>
          <MobileTitle>우리 지역 숙소의 쿠폰 현황</MobileTitle>
          <MobileLocation>
            ｜
            <LocationIcon
              src={locationIcon}
              alt="장소"
            />
            {data.address} 기준
          </MobileLocation>
        </MobileHeader>
        <MobileUpdateAlarm>
          <ReloadIcon
            src={reloadIcon}
            alt="새로고침"
          />
          매월 1일 00시 00분에 업데이트
        </MobileUpdateAlarm>
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
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  ${theme.response.tablet} {
    display: none;
  }
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

  ${theme.response.tablet} {
    display: none;
  }
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

  ${theme.response.tablet} {
    margin: 0px;
    border-radius: 10px;
  }
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

  ${theme.response.tablet} {
    font-size: 11px;
  }
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

  ${theme.response.tablet} {
    font-size: 11px;

    & > span {
      font-size: 11px;
    }
  }
`;

const MainInformation = styled.div`
  padding-top: 1px;

  color: #202325;
  font-size: 19px;
  font-weight: 700;

  animation: fadeUp 0.5s;

  ${theme.response.tablet} {
    font-size: 11px;
  }
`;

const LocationIcon = styled.img`
  padding-bottom: 3px;
`;

const ReloadIcon = styled.img`
  padding-right: 3px;
`;

const BigLocationIcon = styled.img`
  position: absolute;
  right: 10px;
  bottom: 30px;

  width: 120px;
  height: 130px;

  z-index: 10;

  ${theme.response.tablet} {
    right: 10px;
    bottom: 0;

    width: 65px;
  }
`;

const GpsIcon = styled.img`
  padding: 1px 1px 1px 3px;
`;

const MobileHeader = styled.div`
  align-self: flex-start;
  display: none;
  align-items: center;

  ${theme.response.tablet} {
    display: flex;
  }
`;

const MobileTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const MobileLocation = styled.div`
  display: flex;
  align-items: center;

  font-size: 10px;
  font-weight: 700;

  & > img {
    width: 15px;

    padding: 0px;
  }
`;

const MobileUpdateAlarm = styled.span`
  padding: 5px 0px;

  align-self: flex-start;
  display: none;
  align-items: center;

  color: #6c7072;
  font-size: 8px;
  font-weight: 400;

  & > img {
    width: 14px;

    padding-bottom: 0px;
  }

  ${theme.response.tablet} {
    display: flex;
  }
`;
