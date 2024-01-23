import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';

import { LeftSection, RightSection } from '@components/Report';
import ErrorFallback from '@components/Report/LeftSection/index.error';
import Loading from '@components/Report/LeftSection/index.loading';
import theme from '@styles/theme';

const Report = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={ErrorFallback}
      >
        <Suspense fallback={<Loading />}>
          <LeftSection />
        </Suspense>
      </ErrorBoundary>
      <RightSection />
    </Container>
  );
};

export default Report;

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  background-color: white;

  ${theme.response.tablet} {
    flex-direction: column-reverse;
  }
`;
