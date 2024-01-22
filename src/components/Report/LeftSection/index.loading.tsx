import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { DashboardHeader } from '@components/common';

const Loading = () => {
  return (
    <Container>
      <DashboardHeader />
      <Graph>
        <HeaderContainer />
        <ChartContainer>
          <Chart />
        </ChartContainer>
      </Graph>
      <Report>
        <Content />
        <Content />
        <Content />
      </Report>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  min-width: 1016px;
  height: auto;

  border-radius: 20px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  flex: 2;

  background-color: white;
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;
`;

const Graph = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled(BaseSkeleton)`
  margin: 12px 0;
  padding: 18px 0;
`;

const ChartContainer = styled.div`
  min-height: 500px;

  padding: 30px;

  background-color: #f2f4f5;
`;

const Chart = styled(BaseSkeleton)`
  height: 100%;

  background-color: white;
`;

const Report = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 30px;
  border-radius: 16px;
  padding: 25px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fafafb;
`;

const Content = styled(BaseSkeleton)`
  width: 270px;
  height: 130px;

  border-radius: 18.5px;
`;
