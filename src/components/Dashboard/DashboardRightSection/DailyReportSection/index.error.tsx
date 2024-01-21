import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);

  return (
    <Container>
      <ErrorMessage>
        우리 숙소 일간 리포트
        <br /> 에러 발생
      </ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도</RetryButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  height: 45%;
  min-height: 379px;

  margin-top: 17px;
  padding: 38.5px 15px 10px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const ErrorMessage = styled.span``;

const RetryButton = styled.button``;
