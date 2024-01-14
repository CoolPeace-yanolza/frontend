import styled from '@emotion/styled';

import StatusItem from './StatusItem';
import { getStatusToLocaleString } from '@utils/lib/dashboard';

// DUMMYDATA(삭제예정)
const statusDummyData = {
  total_sales: '460000',
  used_count: '19',
  settlemnet_amount: '20000'
};

//HACK : 데이터 형식 예시
// {
// 	"total_sales" : "460000",
// 	"used_count" : "19",
//   "settlemnet_amount" : "20000"
// }
//
// 데이터를 배열로 받게될 경우 하위 컴포넌트 내에서 map함수로 처리 예정 \

const CouponStatusSection = () => {
  return (
    <Container>
      <Header>
        <Title>이번 달 똑똑현황</Title>
      </Header>
      <InnerContainer>
        <StatusItem
          title="쿠폰 사용 총 매출"
          result={getStatusToLocaleString(statusDummyData.total_sales) + '원'}
          index={1}
        />
        <StatusItem
          title="쿠폰 적용 예약 건수"
          result={getStatusToLocaleString(statusDummyData.used_count) + '건'}
        />
        <StatusItem
          title="쿠폰 정산 금액"
          result={
            getStatusToLocaleString(statusDummyData.settlemnet_amount) + '원'
          }
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
