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
import { useRecoilValue } from 'recoil';

import theme from '@styles/theme';
import { GraphHeaderTag } from '@/types/dashboard';
import graphOptions from './graphOptions';
import { headerAccommodationState } from '@recoil/index';
import { useGetMonthReports } from '@hooks/index';
import reloadIcon from '@assets/icons/ic-dashboard-reload.svg';

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

const GraphContainer = () => {
  const headerSelectedState = useRecoilValue(headerAccommodationState);
  const { data } = useGetMonthReports(headerSelectedState.id);
  const [isIncomeGraph, setisIncomeGraph] = useState(true);

  const barGraphData = {
    labels: data.map(data => `${data.statistics_month}월`),
    datasets: [
      {
        type: 'line' as const,
        label: '전환율(%)',
        borderColor: '#FFADC8',
        backgroundColor: '#FFADC8',
        borderWidth: 2,
        data: data.map(data => data.conversion_rate),
        yAxisID: 'y2'
      },
      {
        type: 'bar' as const,
        label: '쿠폰 다운로드',
        data: data.map(data => data.download_count),
        backgroundColor: '#3182F6',
        borderRadius: 7,
        yAxisID: 'y1',
        barPercentage: 0.8
      },
      {
        type: 'bar' as const,
        label: '쿠폰 사용완료',
        data: data.map(data => data.used_count),
        backgroundColor: '#FF3478',
        borderRadius: 7,
        yAxisID: 'y1',
        barPercentage: 0.8
      }
    ]
  };

  const lineGraphData = {
    labels: data.map(data => `${data.statistics_month}월`),
    datasets: [
      {
        fill: true,
        label: '쿠폰매출',
        data: data.map(data => data.coupon_total_sales),
        borderWidth: 1,
        borderColor: '#3182F6',
        backgroundColor: '#A7CBFF',
        yAxisID: 'y1'
      },

      {
        fill: true,
        label: '전체매출',
        data: data.map(data => data.total_sales),
        borderWidth: 1,
        borderColor: '#FF3478',
        backgroundColor: '#FFC1D6',
        yAxisID: 'y1'
      }
    ]
  };

  return (
    <Container>
      <Header>
        <Title>월별 차트</Title>
        <HeaderDescription>
          프로모션 적용 이후 예약 현황을 알려드립니다.
          <HeaderSubDescription>
            <ReloadIcon src={reloadIcon} />
            매월 1일 00시 00분에 업데이트
          </HeaderSubDescription>
        </HeaderDescription>
      </Header>
      <GraphWrapper>
        <MobileHeader>
          <MobileTitle>월별 차트</MobileTitle>
          <MobileHeaderDescription>
            프로모션 적용 이후 예약 현황을 알려드립니다.
            <HeaderSubDescription>
              <ReloadIcon src={reloadIcon} />
              매월 1일 00시 00분에 업데이트
            </HeaderSubDescription>
          </MobileHeaderDescription>
        </MobileHeader>
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

  ${theme.response.tablet} {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

const HeaderDescription = styled.div`
  padding: 0px 10px 3px;

  display: flex;
  align-items: flex-end;

  color: #5e5e5e;
  font-size: 12px;
  font-weight: 700;
`;

const HeaderSubDescription = styled.div`
  padding-left: 5px;

  display: flex;
  align-items: flex-end;

  color: #6c7072;
  font-size: 11px;
  font-weight: 400;

  ${theme.response.tablet} {
    padding-left: 0px;
    padding-top: 3px;

    font-size: 8px;
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

  ${theme.response.tablet} {
    padding: 20px 10px;
    border-radius: 10px;
  }
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

  ${theme.response.tablet} {
    margin-right: 5px;

    font-size: 10px;
  }
`;

const GraphInnerWrapper = styled.div`
  width: 98%;
  height: 88%;

  border-radius: 15px;

  background-color: white;

  ${theme.response.tablet} {
    height: calc(100vw / 2);
    min-height: 250px;
  }
`;

const MobileHeader = styled.div`
  display: none;

  ${theme.response.tablet} {
    padding-bottom: 15px;

    align-self: flex-start;
    display: flex;
    align-items: flex-start;
    gap: 3px;
  }
`;

const MobileTitle = styled.span`
  padding-right: 5px;

  font-size: 15px;
  font-weight: 700;
  line-height: 100%;
`;

const MobileHeaderDescription = styled.div`
  padding-bottom: 2px;

  color: #5e5e5e;
  font-size: 10px;
  font-weight: 700;
`;

const ReloadIcon = styled.img`
  padding-right: 3px;

  ${theme.response.tablet} {
    display: block;

    width: 12px;
  }
`;
