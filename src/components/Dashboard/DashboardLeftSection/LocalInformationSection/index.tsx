import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const LocalTop3Coupons = React.lazy(() => import('./Top3Coupons'));
import Top3CouponErrorFallback from './Top3Coupons/index.error';
import Top3CouponRankingLoading from './Top3Coupons/index.loading';
const LocalCouponUsage = React.lazy(() => import('./LocalCouponUsage'));
import LocalUsageErrorFallback from './LocalCouponUsage/index.error';
import LocalUsageLoading from './LocalCouponUsage/index.loading';
import theme from '@styles/theme';

const LocalInformationSection = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <LeftSection>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={LocalUsageErrorFallback}
        >
          <Suspense fallback={<LocalUsageLoading />}>
            <LocalCouponUsage />
          </Suspense>
        </ErrorBoundary>
      </LeftSection>
      <RightSection>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={Top3CouponErrorFallback}
        >
          <Suspense fallback={<Top3CouponRankingLoading />}>
            <LocalTop3Coupons />
          </Suspense>
        </ErrorBoundary>
      </RightSection>
    </Container>
  );
};

export default LocalInformationSection;

const Container = styled.div`
  min-height: 327px;

  margin-top: 17px;
  padding: 30px 20px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  gap: 12px;

  background-color: white;

  ${theme.response.tablet} {
    margin-top: 0;
    padding: 10px;

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
  width: 410px;
  height: 100%;

  ${theme.response.tablet} {
    width: 100%;
  }
`;
