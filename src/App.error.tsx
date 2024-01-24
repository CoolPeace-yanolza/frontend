import { FallbackProps } from 'react-error-boundary';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import errorIcon from '@assets/icons/ic-error.svg';
import reloadIcon from '@assets/icons/ic-reload.svg';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <ErrorIcon
        src={errorIcon}
        alt="에러 발생"
      />
      <ErrorWord>서비스를 이용할 수 없습니다.</ErrorWord>
      <ReLoadButton onClick={resetErrorBoundary}>
        <ReloadIcon
          src={reloadIcon}
          alt="에러 발생"
        />
        다시 시도 하기
      </ReLoadButton>
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

const ErrorIcon = styled.img`
  width: 80px;
  height: 80px;

  ${theme.response.tablet} {
    width: 50px;
    height: 50px;
  }
`;

const ErrorWord = styled.span`
  font-size: 20px;
  font-weight: 500;

  ${theme.response.tablet} {
    font-size: 15px;
  }
`;

const ReLoadButton = styled.button`
  margin-top: 15px;
  margin-left: 3px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  font-size: 15px;
  text-align: center;

  transition: all 0.5s;

  &:hover {
    color: gray;
  }

  ${theme.response.tablet} {
    margin-top: 10px;

    font-size: 13px;
  }
`;

const ReloadIcon = styled.img`
  width: 25px;
  height: 25px;

  margin-right: 10px;

  ${theme.response.tablet} {
    width: 20px;
    height: 20px;
  }
`;
