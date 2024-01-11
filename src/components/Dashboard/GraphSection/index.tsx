import styled from '@emotion/styled';

import { DashboardHeader } from '@components/common';
import GraphContainer from './GraphContainer';
import DownLoadReport from './DownLoadReport';

const GraphSection = () => {
  return (
    <Container>
      <DashboardHeader />
      <InnerContainer>
        <LeftSection>
          <GraphContainer />
        </LeftSection>
        <RightSection>
          <DownLoadReport />
        </RightSection>
      </InnerContainer>
    </Container>
  );
};

export default GraphSection;

const Container = styled.div`
  width: 100%;
  height: 533px;

  padding: 37px 18px 35px 37px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  flex: 6;
`;

const RightSection = styled.div`
  flex: 4;
`;
