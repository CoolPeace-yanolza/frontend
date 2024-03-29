import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import theme from '@styles/theme';
import GetMatchedReport from './GetMatchedReport';
import { useGetDailyReport } from '@hooks/index';
import { headerAccommodationState } from '@recoil/index';

const DailyReportSection = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  const { data } = useGetDailyReport(headerSelectState.id);

  return (
    <Container>
      <Title>우리 숙소 일간 리포트</Title>
      <Description>사장님! 쿠폰 상태를 확인해보세요</Description>
      {GetMatchedReport(data.condition_num)}
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

  ${theme.response.tablet} {
    height: auto;
    min-height: auto;

    margin: 5px 10px;
    padding: 15px;
    border-radius: 10px;

    background-color: #fafafb;
  }
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;

  ${theme.response.tablet} {
    font-size: 15px;
  }
`;

const Description = styled.div`
  padding: 10px 0px;

  color: #6c7072;
  font-size: 13.005px;
  font-weight: 700;

  ${theme.response.tablet} {
    font-size: 10px;
  }
`;
