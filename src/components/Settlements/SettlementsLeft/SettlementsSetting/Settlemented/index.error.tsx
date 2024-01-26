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
      <ErrorWord>정산 내역을 불러올 수 없습니다.</ErrorWord>
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
  height: 619.13px;

  margin-left: 43px;
  margin-right: 43px;
  margin-top: 20px;
  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: white;

  ${theme.response.tablet} {
    max-height: 250px;

    margin: 20px;
    padding: 15px 15px;
    border-radius: 10px;

    gap: 15px;

    background-color: #f2f4f5;
  }
`;

const ErrorIcon = styled.img`
  width: 35px;
  height: 35px;

  ${theme.response.tablet} {
    width: 40px;
    height: 40px;
  }
`;

const ErrorWord = styled.span`
  font-size: 14px;
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
  font-size: 12px;
  text-align: center;

  transition: all 0.5s;

  &:hover {
    color: gray;
  }

  ${theme.response.tablet} {
    margin: 0;

    font-size: 10px;
  }
`;

const ReloadIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 10px;

  ${theme.response.tablet} {
    width: 15px;
    height: 15px;
  }
`;
