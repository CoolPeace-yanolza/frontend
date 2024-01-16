import styled from '@emotion/styled';

import { ReportGraphProps } from '@/types/report';

const Graph = ({ graphData }: { graphData: ReportGraphProps }) => {
  // HACK: Notice 업데이트 정책 변경
  // utils/calculation.ts 파일 사용하여 마지막 날짜 불러오기
  return (
    <Container>
      <Header>
        <Title>누적 리포트</Title>
        <Notice>
          프로모션 적용 이후 예약 현황을 알려드립니다.
          <Update>(23.12.29 업데이트)</Update>
        </Notice>
      </Header>
      <InnerContainer>
        {
          // HACK: chart.js 적용 예정
          graphData[0].statistics_month
        }
      </InnerContainer>
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  width: 100%;

  border-radius: 16px;

  flex: 8;
`;

const Header = styled.div`
  padding: 20px 0;

  display: flex;
  align-items: flex-end;
`;

const Title = styled.span`
  margin-right: 10px;

  color: #181e29;
  font-size: 22px;
  font-weight: 700;
`;

const Notice = styled.p`
  color: #5e5e5e;
  font-size: 12.5px;
  font-weight: 700;

  & > span {
    color: #8e8e8e;
    font-size: 10.5px;
    font-weight: 500;
  }
`;

const Update = styled.span`
  margin-left: 10px;
`;

const InnerContainer = styled.div`
  padding: 25% 0;
`;
