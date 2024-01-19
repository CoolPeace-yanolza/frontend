import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);

  return (
    <Container>
      <ErrorMessage>누적 똑똑 현황 에러 발생</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
  height: 580px;

  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: white;
`;

const ErrorMessage = styled.span``;

const RetryButton = styled.button``;
