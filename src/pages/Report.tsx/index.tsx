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
  display: flex;
  justify-content: space-between;
  gap: 25px;

  width: 100%;
  height: 100%;
`;

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;

  flex: 8;
  height: 100%;
`;

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;

  flex: 2;
  height: 100%;
`;
