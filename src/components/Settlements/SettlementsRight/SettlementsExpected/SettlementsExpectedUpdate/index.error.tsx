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
      <ErrorWord>예상 정산 내역을 불러올 수 없습니다.</ErrorWord>
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
  height: 155.67px;

  margin-top: 20px;
  border: 1px solid white;
  border-radius: 5px;

  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;

  ${theme.response.tablet} {
    padding: 15px 15px;
    border-radius: 5px;

    gap: 15px;

    background-color: #f2f4f5;
  }
`;

const ErrorIcon = styled.img`
  width: 35px;
  height: 35px;

  ${theme.response.tablet} {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 592px) {
    width: 25px;
    height: 25px;
  }
`;

const ErrorWord = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 592px) {
    font-size: 10px;
  }

  @media (max-width: 526px) {
    font-size: 8px;
  }
`;

const ReLoadButton = styled.button`
  margin-left: 3px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  font-size: 10px;
  text-align: center;

  transition: all 0.5s;

  &:hover {
    color: gray;
  }

  @media (max-width: 592px) {
    font-size: 8px;
  }

  @media (max-width: 526px) {
    font-size: 6px;
  }
`;

const ReloadIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 3px;

  ${theme.response.tablet} {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 592px) {
    width: 22px;
    height: 12px;
  }
`;
