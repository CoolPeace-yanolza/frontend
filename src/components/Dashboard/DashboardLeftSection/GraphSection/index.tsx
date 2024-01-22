import styled from '@emotion/styled';

import { DashboardHeader } from '@components/common';
import GraphContainer from './GraphContainer';
import DownloadReport from './DownloadReport';

const GraphSection = () => {
  return (
    <Container>
      <DashboardHeader />
      <InnerContainer>
        <LeftSection>
          <GraphContainer />
        </LeftSection>
        <RightSection>
          <DownloadReport />
        </RightSection>
      </InnerContainer>
    </Container>
  );
};

export default GraphSection;

const Container = styled.div`
  min-height: 533px;

  padding: 20px 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex: 6;

  background-color: white;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const LeftSection = styled.div`
  height: 98%;

  flex: 1;
`;

const RightSection = styled.div`
  width: 350px;
  height: 100%;
`;
