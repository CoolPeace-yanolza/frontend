import styled from '@emotion/styled';

import {
  StatusComponent01,
  StatusComponent02,
  StatusComponent03,
  StatusComponent04
} from './StatusComponents';

// DATA 예시
// {
// 	"condition" : "등록된 쿠폰이 없음",
//   "coupon_titles" : {}
// }

// {
// 	"condition" : "노출중인 쿠폰이 없음",
//   "coupon_titles" : {}
// }

// TODO : 백엔드 요청사항
// --> condition_code : 1 ~ 4; 추가되도록 요청
// condition_code로 조건에 맞는 화면 렌더링

const getMatchedComponent = (condition: number) => {
  switch (condition) {
    case 1:
      return <StatusComponent01 />;
    case 2:
      return <StatusComponent02 />;
    case 3:
      return <StatusComponent03 />;
    case 4:
      return <StatusComponent04 />;
  }
};

const DailyReportSection = () => {
  return (
    <Container>
      <Title>우리 숙소 일간 리포트</Title>
      <Discription>사장님! 쿠폰 상태를 확인해보세요</Discription>
      {getMatchedComponent(1)}
    </Container>
  );
};

export default DailyReportSection;

const Container = styled.div`
  height: 45%;
  min-height: 379px;

  margin-top: 17px;
  padding: 38.5px 15px 10px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const Discription = styled.div`
  padding: 10px 0px;

  color: #6c7072;
  font-size: 13.005px;
  font-weight: 700;
`;
