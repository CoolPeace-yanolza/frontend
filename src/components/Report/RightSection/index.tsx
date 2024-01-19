import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';

import TotalReport from './TotalReport';
import Catchphrase from './Catchphrase';
import Loading from './TotalReport/index.loading';
import ErrorFallback from './TotalReport/index.error';

const RightSection = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Section>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={ErrorFallback}
      >
        <Suspense fallback={<Loading />}>
          <TotalReport />
        </Suspense>
      </ErrorBoundary>
      <Catchphrase />
    </Section>
  );
};

export default RightSection;

const Section = styled.section`
  min-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 30px;
`;
