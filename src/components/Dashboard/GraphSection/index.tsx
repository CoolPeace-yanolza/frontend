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

  padding: 30px 18px 30px 37px;
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
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

const LeftSection = styled.div`
  height: 100%;

  flex: 6;
`;

const RightSection = styled.div`
  height: 100%;

  flex: 4;
`;
