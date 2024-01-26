import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <ErrorMessage>우리 지역 쿠폰 Top3 에러 발생</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 16px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #fafafb;
`;

const ErrorMessage = styled.span`
  height: 30%;

  font-size: 18px;
  font-weight: 700;
`;

const RetryButton = styled.button``;
