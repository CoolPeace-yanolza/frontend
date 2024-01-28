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
      <ErrorWord>누적 리포트 차트를 불러올 수 없습니다.</ErrorWord>
      <ReLoadButton onClick={resetErrorBoundary}>
        <ReloadIcon
          src={reloadIcon}
          alt="에러 발생"
        />
        다시 시도
      </ReLoadButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 100%;
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

  ${theme.response.tablet} {
    width: 95%;
    min-width: auto;
    height: 300px;

    margin: 20px 0 30px 0;
    padding: 12px 15px;

    align-self: center;
    background-color: #f2f4f5;
  }
`;

const ErrorIcon = styled.img`
  width: 60px;
  height: 60px;

  ${theme.response.tablet} {
    width: 40px;
    height: 40px;
  }
`;

const ErrorWord = styled.span`
  font-size: 18px;
  font-weight: 500;

  ${theme.response.tablet} {
    font-size: 13px;
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

    font-size: 10px;
  }
`;

const ReloadIcon = styled.img`
  width: 25px;
  height: 25px;

  margin-right: 10px;

  ${theme.response.tablet} {
    width: 15px;
    height: 15px;
  }
`;
