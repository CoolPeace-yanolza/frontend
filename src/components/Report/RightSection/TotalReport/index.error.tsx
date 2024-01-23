import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

import theme from '@styles/theme';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <span>누적 똑똑 현황 에러 발생</span>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
  height: 580px;

  margin-left: 10px;
  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: white;

  ${theme.response.tablet} {
    width: 90%;
    max-height: 250px;

    padding: 15px 15px;
    border-radius: 10px;

    background-color: #f2f4f5;
  }
`;
