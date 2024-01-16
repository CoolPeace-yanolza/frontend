import styled from '@emotion/styled';

import { LeftSection, RightSection } from '@components/Report';

const Report = () => {
  return (
    // HACK: 로딩 화면 구현 (Suspense) // 로딩 감싸는 기준 정하기
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
