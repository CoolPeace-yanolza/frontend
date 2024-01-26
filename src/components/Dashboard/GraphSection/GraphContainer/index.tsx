import styled from '@emotion/styled';
import { useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { GraphHeaderTag } from '@/types/dashboard';
import graphOptions from './graphOptions';
import { getUpdatedDate } from '@utils/index';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);

//HACK: 그래프 데이터 렌더링에 대한 테스트파일입니다. 실제 기능 구현에서는 해당 파일 다소 변경될 것 같습니다.

const labels = ['1월', '2월', '3월', '4월', '5월', '6월'];

export const barGraphData = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: '전환율(%)',
      borderColor: '#FFADC8',
      backgroundColor: '#FFADC8',
      borderWidth: 2,
      data: [10, 20, 10, 40, 30, 60, 10],
      yAxisID: 'y2'
    },
    {
      type: 'bar' as const,
      label: '쿠폰 다운로드',
      data: [600, 500, 400, 500, 600, 800, 800],
      backgroundColor: '#3182F6',
      borderRadius: 5,
      yAxisID: 'y1'
    },

    {
      type: 'bar' as const,
      label: '쿠폰 사용완료',
      data: [300, 400, 200, 200, 400, 600, 700],
      backgroundColor: '#FF3478',
      borderRadius: 5,
      yAxisID: 'y1'
    }
  ]
};

export const lineGraphData = {
  labels,
  datasets: [
    {
      fill: true,
      label: '쿠폰매출',
      data: [300, 400, 200, 200, 400, 600, 700],
      borderColor: 'rgb(63, 153, 201)',
      backgroundColor: 'rgba(63, 153, 201, 0.5)',
      yAxisID: 'y1'
    },

    {
      fill: true,
      label: '전체매출',
      data: [600, 500, 400, 500, 600, 800, 800],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y1'
    }
  ]
};

//HACK 추후 utils에 적절한 폴더 생기면 옮길 예정

const GraphContainer = () => {
  const [isIncomeGraph, setisIncomeGraph] = useState(true);

  return (
    <Container>
      <Header>
        <Title>월별 차트</Title>
        <HeaderDescription>
          프로모션 적용 이후 예약 현황을 알려드립니다.{' '}
          <span>({getUpdatedDate()} 업데이트)</span>
        </HeaderDescription>
      </Header>
      <GraphWrapper>
        <GraphHeader>
          <GraphHeaderTag
            $active={isIncomeGraph}
            onClick={() => {
              setisIncomeGraph(true);
            }}
          >
            매출 현황
          </GraphHeaderTag>
          <GraphHeaderTag
            $active={!isIncomeGraph}
            onClick={() => {
              setisIncomeGraph(false);
            }}
          >
            쿠폰사용 현황
          </GraphHeaderTag>
        </GraphHeader>
        <GraphInnerWrapper>
          <Chart
            options={graphOptions}
            type={isIncomeGraph ? 'line' : 'bar'}
            data={isIncomeGraph ? lineGraphData : barGraphData}
          />
        </GraphInnerWrapper>
      </GraphWrapper>
    </Container>
  );
};

export default GraphContainer;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 24.33px 0;

  display: flex;
  align-items: flex-end;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

const HeaderDescription = styled.div`
  padding: 0px 10px 3px;

  color: #5e5e5e;
  font-size: 12px;
  font-weight: 700;

  & > span {
    color: #8e8e8e;
    font-size: 10.519px;
    font-weight: 500;
  }
`;

const GraphWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fafafb;
`;

const GraphHeader = styled.div`
  width: 100%;

  margin-bottom: 15px;
  border-bottom: 1px solid #dde1e6;

  display: flex;
`;

const GraphHeaderTag = styled.span<GraphHeaderTag>`
  margin-right: 25px;
  padding: 5px;

  border-bottom: ${props => (props.$active ? '2px solid #022C79' : null)};

  color: ${props => (props.$active ? '#022C79' : '#6c7072')};
  font-size: 13.005px;
  font-weight: 700;

  cursor: pointer;
`;

const GraphInnerWrapper = styled.div`
  width: 98%;
  height: 100%;
  max-height: 300px;

  border-radius: 20px;

  background-color: white;
`;