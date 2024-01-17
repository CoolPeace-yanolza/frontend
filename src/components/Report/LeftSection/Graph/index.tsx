import styled from '@emotion/styled';
import { Bar } from 'react-chartjs-2';

import { ReportGraphProps } from '@/types/report';

const Graph = ({ graphData }: { graphData: ReportGraphProps }) => {
  // HACK: Notice 업데이트 정책 변경
  // utils/calculation.ts 파일 사용하여 마지막 날짜 불러오기

  const chartData = {
    labels: graphData.map(data => `${data.statistics_month} 월`),
    datasets: [
      {
        label: '전체 매출',
        data: graphData.map(data => parseInt(data.total_sales)),
        backgroundColor: '#022c79e0',
        borderColor: '#022c79',
        borderWidth: 1,
        borderRadius: 5
      },
      {
        label: '쿠폰 적용 매출',
        data: graphData.map(data => parseInt(data.coupon_total_sales)),
        backgroundColor: '#ff3478e0',
        borderColor: '#FF3478',
        borderWidth: 1,
        borderRadius: 5
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <Container>
      <Content>
        <Title>누적 리포트</Title>
        <Notice>
          프로모션 적용 이후 예약 현황을 알려드립니다.
          <Update>(23.12.29 업데이트)</Update>
        </Notice>
      </Content>
      <InnerContainer>
        <BarGraph
          data={chartData}
          options={options}
        />
      </InnerContainer>
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 25px 0;

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
  position: relative;

  width: 100%;
  min-height: 500px;

  border-radius: 16px;
  padding: 30px;

  background-color: #fafafb;
`;

const BarGraph = styled(Bar)`
  border-radius: 16px;
  padding: 10px 20px;

  background-color: white;
`;
