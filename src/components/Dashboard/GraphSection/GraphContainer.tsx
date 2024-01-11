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
  LineController,
  BarController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

//HACK: 그래프 데이터 렌더링에 대한 테스트파일입니다. 실제 기능 구현에서는 해당 파일 다소 변경될 것 같습니다.

const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: '전환율',
      borderColor: '#FFADC8',
      backgroundColor: '#FFADC8',
      borderWidth: 2,
      fill: false,
      data: [900, 900, 900, 900, 800, 600, 800]
    },
    {
      type: 'bar' as const,
      // fill: true,
      label: '쿠폰 다운로드',
      data: [600, 500, 400, 500, 600, 800, 800],
      backgroundColor: '#3182F6',
      borderRadius: 5
    },

    {
      type: 'bar' as const,
      // fill: true,
      label: '쿠폰 사용완료',
      data: [300, 400, 200, 200, 400, 600, 700],
      backgroundColor: '#FF3478',
      borderRadius: 5
    }
  ]
};

const GraphContainer = () => {
  const [doownLoad, setDownLoad] = useState(0);

  const options: any = {
    responsive: true,
    plugins: {
      // legend: {
      //   display: false
      // }
    },

    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'gray',
          font: {
            size: 14,
            weight: 500
          },
          padding: 15
        }
      },
      y: {
        beginAtZero: true,
        max: 1200,
        grid: {
          display: false
        }
      }
    },
    onClick: (event: MouseEvent, elements: any[]) => {
      if (elements.length > 0) {
        const clickedIndex: number = elements[0].index;
        const clickedLabel: string = labels[clickedIndex];

        console.log(`Clicked on ${clickedLabel}`);

        const allDataForClickedMonth: number[] = data.datasets.map(
          dataset => dataset.data[clickedIndex]
        );
        console.log(`Data for ${clickedLabel}:`, allDataForClickedMonth);
        setDownLoad(allDataForClickedMonth[1]);
      }
    }
  };

  return (
    <Container>
      <Header>
        <Title>월별 차트</Title>
      </Header>
      <GraphWrapper>
        <GraphInnerWrapper>
          <Chart
            options={options}
            type="bar"
            data={data}
          />
        </GraphInnerWrapper>
      </GraphWrapper>
    </Container>
  );
};

export default GraphContainer;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 24.33px 0;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

const GraphWrapper = styled.div`
  min-height: 357px;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fafafb;
`;

const GraphInnerWrapper = styled.div`
  width: 90%;

  border-radius: 20px;

  background-color: #fff;
`;
