import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);

  return (
    <Container>
      <ErrorMessage>
        이번 달 똑똑 현황
        <br /> 에러 발생
      </ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  height: 55%;
  min-height: 481px;

  padding: 29px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  background-color: white;
`;

const ErrorMessage = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const RetryButton = styled.button``;
