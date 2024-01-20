import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);

  return (
    <Container>
      <span>누적 리포트 차트 에러 발생</span>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  min-width: 1016px;
  height: 880px;

  border-radius: 20px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: white;
`;
