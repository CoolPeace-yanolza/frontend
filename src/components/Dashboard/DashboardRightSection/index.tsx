import React, { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';

const CouponStatusSection = React.lazy(() => import('./CouponStatusSection'));
const DailyReportSection = React.lazy(() => import('./DailyReportSection'));
import StatusErrorFallback from './CouponStatusSection/index.error';
import StatusSectionLoading from './CouponStatusSection/index.loading';
import DailyReportErrorFallback from './DailyReportSection/index.error';
import DailyReportLoading from './DailyReportSection/index.loading';

const DashboardRightSection = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={StatusErrorFallback}
      >
        <Suspense fallback={<StatusSectionLoading />}>
          <CouponStatusSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={DailyReportErrorFallback}
      >
        <Suspense fallback={<DailyReportLoading />}>
          <DailyReportSection />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default DashboardRightSection;

const Container = styled.div`
  min-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
