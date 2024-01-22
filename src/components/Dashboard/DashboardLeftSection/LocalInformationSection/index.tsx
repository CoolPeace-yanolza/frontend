import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import LocalCouponUsage from './LocalCouponUsage';
const LocalTop3Coupons = React.lazy(() => import('./Top3Coupons'));
import Top3CouponErrorFallback from './Top3Coupons/index.error';
import Top3CouponRanking from './Top3Coupons/index.loading';

const LocalInformationSection = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <LeftSection>
        <LocalCouponUsage />
      </LeftSection>
      <RightSection>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={Top3CouponErrorFallback}
        >
          <Suspense fallback={<Top3CouponRanking />}>
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
`;

const LeftSection = styled.div`
  height: 100%;

  flex: 1;
`;

const RightSection = styled.div`
  width: 410px;
  height: 100%;
`;
