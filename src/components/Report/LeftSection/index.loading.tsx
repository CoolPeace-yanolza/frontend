import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { DashboardHeader } from '@components/common';
import theme from '@styles/theme';

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

  ${theme.response.tablet} {
    min-width: auto;

    margin: 10px 15px 20px 15px;
    padding: 12px 15px;

    justify-content: center;
    align-items: center;
  }
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;

  ${theme.response.tablet} {
    border-radius: 10px;
  }
`;

const Graph = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    border-radius: 10px;
  }
`;

const HeaderContainer = styled(BaseSkeleton)`
  margin: 12px 0;
  padding: 18px 0;

  ${theme.response.tablet} {
    padding: 10px;
  }
`;

const ChartContainer = styled.div`
  min-height: 500px;

  padding: 30px;

  background-color: #f2f4f5;

  ${theme.response.tablet} {
    height: calc(100vw / 2);
    min-height: calc(100vw / 2);

    border-radius: 10px;
    padding: 0;
  }
`;

const Chart = styled(BaseSkeleton)`
  height: 100%;

  background-color: white;

  ${theme.response.tablet} {
    padding: 10px 15px;
  }
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

  ${theme.response.tablet} {
    margin-top: 15px;
    padding: 15px 20px;
  }
`;

const Content = styled(BaseSkeleton)`
  width: 270px;
  height: 130px;

  border-radius: 18.5px;

  ${theme.response.tablet} {
    width: calc(50vw / 3);
    height: 50px;

    border-radius: 15;
    padding: 8px 6px;

    background-color: #fafafb;
  }
`;
