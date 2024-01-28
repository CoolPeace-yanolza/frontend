import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import theme from '@styles/theme';
import StatusItem from './StatusItem';
import { useGetMonthStatus } from '@hooks/index';
import { getStatusToLocaleString } from '@utils/index';
import { headerAccommodationState } from '@recoil/index';

const CouponStatusSection = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  const { data } = useGetMonthStatus(headerSelectState.id);

  return (
    <Container>
      <Header>
        <Title>이번 달 똑똑현황</Title>
      </Header>
      <InnerContainer>
        <StatusItem
          title="쿠폰 사용 총 매출"
          result={getStatusToLocaleString(data.coupon_total_sales) + '원'}
          index={1}
        />
        <StatusItem
          title="쿠폰 적용 예약 건수"
          result={getStatusToLocaleString(data.used_count) + '건'}
        />
        <StatusItem
          title="쿠폰 정산 금액"
          result={getStatusToLocaleString(data.settlement_amount) + '원'}
        />
      </InnerContainer>
    </Container>
  );
};

export default CouponStatusSection;

const Container = styled.div`
  height: 55%;
  min-height: 481px;

  padding: 29px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #404446;

  background-color: white;

  ${theme.response.tablet} {
    height: auto;
    min-height: auto;

    padding: 9px;
  }
`;

const Header = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 16px 0;

  font-size: 17px;
  font-weight: 700;

  ${theme.response.tablet} {
    padding-left: 10px;

    font-size: 15px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  ${theme.response.tablet} {
    height: auto;

    flex-direction: row;
    justify-content: space-between;
  }
`;
