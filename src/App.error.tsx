import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <span>App 전체 에러 발생</span>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
