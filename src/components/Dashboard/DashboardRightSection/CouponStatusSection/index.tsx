import styled from '@emotion/styled';

import StatusItem from './StatusItem';
import { useGetMonthStatus } from '@hooks/queries/useGetMonthStatus';
import { getStatusToLocaleString } from '@utils/index';

const CouponStatusSection = () => {
  //HACK: 임시, 헤더API 연동 후 accommodation_id 전달 예정
  const { data } = useGetMonthStatus(2);

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
          result={getStatusToLocaleString(data.used_count) + '개'}
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

  background-color: white;
`;

const Header = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 16px 0;

  font-size: 17px;
  font-weight: 700;
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
`;
