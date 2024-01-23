import styled from '@emotion/styled';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  BarController
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  BarController
);

import { ReportGraphProps } from '@/types/report';
import SelectYear from './SelectYear';
import theme from '@styles/theme';

const Graph = ({ graphData }: { graphData: ReportGraphProps }) => {
  // HACK: Notice 업데이트 정책 변경
  // utils/calculation.ts 파일 사용하여 마지막 날짜 불러오기

  const chartData = {
    labels: graphData.map(data => `${data.statistics_month} 월`),
    datasets: [
      {
        label: '전체 매출',
        data: graphData.map(data => parseInt(data.total_sales)),
        backgroundColor: '#3182F6',
        borderColor: '#3182F6',
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.8
      },
      {
        label: '쿠폰 적용 매출',
        data: graphData.map(data => parseInt(data.coupon_total_sales)),
        backgroundColor: '#FF3478',
        borderColor: '#FF3478',
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.8
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: () => undefined
      }
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Content>
          <Title>누적 리포트</Title>
          <Notice>
            프로모션 적용 이후 예약 현황을 알려드립니다.
            <Update>(23.12.29 업데이트)</Update>
          </Notice>
        </Content>
        <SelectYear />
      </HeaderContainer>
      <GraphContainer>
        <BarGraph
          options={options}
          type={'bar'}
          data={chartData}
        />
      </GraphContainer>
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    border-radius: 10px;
  }
`;

const HeaderContainer = styled.div`
  padding: 25px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.response.tablet} {
    padding: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.span`
  margin-right: 10px;

  color: #181e29;
  font-size: 22px;
  font-weight: 700;

  ${theme.response.tablet} {
    font-size: 15px;
  }
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

  ${theme.response.tablet} {
    display: none;
  }
`;

const Update = styled.span`
  margin-left: 10px;
`;

const GraphContainer = styled.div`
  position: relative;

  width: 100%;
  min-height: 500px;

  border-radius: 16px;
  padding: 30px;

  background-color: #fafafb;

  ${theme.response.tablet} {
    height: calc(100vw / 2);
    min-height: calc(100vw / 2);

    padding: 0;
  }
`;

const BarGraph = styled(Chart)`
  border-radius: 16px;
  padding: 10px 20px;

  background-color: white;

  ${theme.response.tablet} {
    padding: 10px 15px;
  }
`;
