import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <Header>다운로드 리포트 에러 발생</Header>
      <ResetButton onClick={resetErrorBoundary}>다시시도</ResetButton>
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

  background-color: #fafafb;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ResetButton = styled.button`
  width: 50%;
`;
