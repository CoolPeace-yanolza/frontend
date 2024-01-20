import React, { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';

import DailyReportSection from './DailyReportSection';
const CouponStatusSection = React.lazy(() => import('./CouponStatusSection'));
import StatusErrorFallback from './CouponStatusSection/index.error';
import StatusSectionLoading from './CouponStatusSection/index.loading';

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
      <DailyReportSection />
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
