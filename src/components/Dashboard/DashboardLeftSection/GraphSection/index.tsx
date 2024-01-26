import styled from '@emotion/styled';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import theme from '@styles/theme';
import { DashboardHeader } from '@components/common';
const GraphContainer = React.lazy(() => import('./GraphContainer'));
import GraphContainerErrorFallback from './GraphContainer/index.error';
import GraphContainerLoading from './GraphContainer/index.loading';
const DownloadReport = React.lazy(() => import('./DownloadReport'));
import DownloadReportErrorFallback from './DownloadReport/index.error';
import DownloadReportLoading from './DownloadReport/index.loading';

const GraphSection = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <DashboardHeader />
      <InnerContainer>
        <LeftSection>
          <ErrorBoundary
            onReset={reset}
            fallbackRender={GraphContainerErrorFallback}
          >
            <Suspense fallback={<GraphContainerLoading />}>
              <GraphContainer />
            </Suspense>
          </ErrorBoundary>
        </LeftSection>
        <RightSection>
          <ErrorBoundary
            onReset={reset}
            fallbackRender={DownloadReportErrorFallback}
          >
            <Suspense fallback={<DownloadReportLoading />}>
              <DownloadReport />
            </Suspense>
          </ErrorBoundary>
        </RightSection>
      </InnerContainer>
    </Container>
  );
};

export default GraphSection;

const Container = styled.div`
  min-height: 533px;

  padding: 20px 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex: 6;

  background-color: white;

  ${theme.response.tablet} {
    padding: 10px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  ${theme.response.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  height: 100%;

  flex: 1;

  ${theme.response.tablet} {
    width: 100%;
  }
`;

const RightSection = styled.div`
  width: 350px;
  height: 100%;

  ${theme.response.tablet} {
    width: 100%;
  }
`;
