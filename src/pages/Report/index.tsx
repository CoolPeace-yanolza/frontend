import styled from '@emotion/styled';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Report = () => {
  return (
    // HACK: 로딩 화면 구현 (Suspense) // 어떤 기준으로 감싸야하나..
    <Container>
      <LeftSection />
      <RightSection />
    </Container>
  );
};

export default Report;

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 25px;
`;
