import styled from '@emotion/styled';

import { ReportGraphSection } from '@components/Report';

const Report = () => {
  return (
    <Container>
      <SectionLeft>
        <ReportGraphSection />
      </SectionLeft>
      <SectionRight></SectionRight>
    </Container>
  );
};

export default Report;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const SectionLeft = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 8;
`;

const SectionRight = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 2;
`;
