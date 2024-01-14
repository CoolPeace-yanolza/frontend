import styled from '@emotion/styled';

import theme from '@styles/theme';
import { getMatchedImage } from '@utils/lib/dashboard';
import { getMatchedComponent } from './StatusComponents';

// DATA 예시
// {
// 	"condition" : "등록된 쿠폰이 없음",
//   "coupon_titles" : {}
// }

// {
// 	"condition" : "노출중인 쿠폰이 없음",
//   "coupon_titles" : {}
// }

// HACK : 백엔드 요청사항
// --> condition_code : 1 ~ 4; 추가되도록 요청
// condition_code로 조건에 맞는 화면 렌더링

const DailyReportSection = () => {
  return (
    <Container>
      <Title>우리 숙소 일간 리포트</Title>
      <Discription>사장님! 쿠폰 상태를 확인해보세요</Discription>
      <ImageContainer>
        <img
          src={getMatchedImage(1)} // <= condition_code : 1
          alt="report-image"
        />
      </ImageContainer>
      <AlarmContainer>
        <AlarmInnerContainer>{getMatchedComponent(1)}</AlarmInnerContainer>
      </AlarmContainer>
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

const ImageContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlarmContainer = styled.div`
  width: 100%;
  min-height: 140px;

  margin-top: 10px;
  padding: 12px;
  border-radius: 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fafafb;
`;

const AlarmInnerContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;
  border-radius: 17px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: #202325;
  text-align: center;

  box-shadow: ${theme.shadow.default};
`;
