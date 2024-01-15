import styled from '@emotion/styled';

import reloadIcon from '@assets/icons/ic-dashboard-reload.svg';
import locationIcon from '@assets/icons/ic-dashboard-location.svg';
import bigLocationIcon from '@assets/icons/ic-dashboard-bigLocation.svg';
import gpsICon from '@assets/icons/ic-dashboard-gps.svg';
import theme from '@styles/theme';

const LocalCouponUsage = () => {
  return (
    <Container>
      <Header>
        <Title>우리 지역 숙소의 쿠폰 현황</Title>
        <Location>
          ｜
          <LocationIcon
            src={locationIcon}
            alt="location-icon"
          />
          종로구 기준
        </Location>
      </Header>
      <UpdateAlarm>
        <ReloadIcon
          src={reloadIcon}
          alt="reload-icon"
        />
        매월 1일 00시 00분에 업데이트
      </UpdateAlarm>
      <InnerContainer>
        <InnerContainerHeader>
          <GpsIcon
            src={gpsICon}
            alt="gps-icon"
          />
          주변 숙소에서는 어떤 쿠폰을 등록하고 있을까요?
        </InnerContainerHeader>
        <CouponUsage>
          <span>현재 내 숙소 주위의 사장님들이</span>
          평균 {8}종 이상의 쿠폰을 사용하고 있어요!
          <BigLocationIcon
            src={bigLocationIcon}
            alt="big-location-icon"
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

  box-shadow: ${theme.shadow.default};

  & > span {
    padding-bottom: 5px;

    color: #404446;
    font-size: 18px;
    font-weight: 700;
  }
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
