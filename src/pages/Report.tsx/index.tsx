import styled from '@emotion/styled';

import { ReportGraphSection } from '@components/Report';

const Report = () => {
  return (
    <Container>
      <LeftSection>
        <ReportGraphSection />
      </LeftSection>
      <RightSection></RightSection>
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

const LeftSection = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 8;
`;

const RightSection = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 2;
`;
