import styled from '@emotion/styled';
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

const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월']; //x축 기준

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'gray',
        font: {
          size: 20,
          weight: 500
        },
        padding: 20
      }
    },
    y: {
      beginAtZero: true,
      max: 1200,
      grid: {
        display: false
      }
    }
  }
};

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'dd',
      borderColor: 'rgb(25, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [300, 400, 200, 200, 400, 600, 700]
    },
    {
      type: 'bar' as const,
      fill: true,
      label: '쿠폰매출',
      data: [300, 400, 200, 200, 400, 600, 700],
      backgroundColor: 'rgba(255, 22, 255, 0.5)'
    },

    {
      type: 'bar' as const,
      fill: true,
      label: '전체매출',
      data: [600, 500, 400, 500, 600, 800, 800],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderRadius: 8
    }
  ]
};

const GraphSection = () => {
  return (
    <StyledContainer>
      <StyledHeader>월간 쿠폰 적용 매출 vs 전체 매출 비교 그래프</StyledHeader>
      <Chart
        options={options}
        type="bar"
        data={data}
        style={{ backgroundColor: 'ghostWhite' }}
      />
    </StyledContainer>
  );
};

export default GraphSection;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background-color: skyblue;
`;

const StyledHeader = styled.div`
  font-size: 2rem;
`;
