import styled from '@emotion/styled';

import theme from '@styles/theme';
import GraphSection from './GraphSection';
import LocalInformationSection from './LocalInformationSection';

const DashboardLeftSection = () => {
  return (
    <Container>
      <GraphSection />
      <LocalInformationSection />
    </Container>
  );
};

export default DashboardLeftSection;

const Container = styled.div`
  min-width: 1016px;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 2;

  ${theme.response.tablet} {
    width: 100%;
    min-width: 100%;
  }
`;
