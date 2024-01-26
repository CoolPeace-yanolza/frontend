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
      <ErrorMessage>이번 달 똑똑 현황을 불러올 수 없습니다.</ErrorMessage>
      <ReloadButton onClick={resetErrorBoundary}>
        <ReloadIcon
          src={reloadIcon}
          alt="에러 발생"
        />
        다시 시도 하기
      </ReloadButton>
    </Container>
  );
};

export default ErrorFallback;

const Container = styled.div`
  width: 250px;
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

  ${theme.response.tablet} {
    width: 100%;
    height: auto;
    min-height: auto;

    flex-direction: row;
  }
`;

const ErrorMessage = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 700;

  ${theme.response.tablet} {
    font-size: 13px;
  }
`;

const ReloadButton = styled.button`
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

const ErrorIcon = styled.img`
  width: 60px;
  height: 60px;

  ${theme.response.tablet} {
    width: 40px;
    height: 40px;
  }
`;
