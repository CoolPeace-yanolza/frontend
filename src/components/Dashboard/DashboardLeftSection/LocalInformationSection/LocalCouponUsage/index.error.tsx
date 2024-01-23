import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <ErrorMessage>지역 쿠폰 현황 에러 발생</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  color: #404446;

  background-color: #fafafb;
`;

const ErrorMessage = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
`;

const RetryButton = styled.button`
  width: 50%;
`;
