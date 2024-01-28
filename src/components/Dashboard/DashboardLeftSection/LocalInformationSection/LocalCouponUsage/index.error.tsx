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
      <ErrorMessage>
        우리 지역 숙소의 쿠폰 현황을 <br /> 불러올 수 없습니다
      </ErrorMessage>
      <ReloadButton onClick={resetErrorBoundary}>
        <ReloadIcon
          src={reloadIcon}
          alt="재시도"
        />
        다시 시도 하기
      </ReloadButton>
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

  color: #404446;

  background-color: #fafafb;

  ${theme.response.tablet} {
    padding: 20px 10px;

    align-self: center;
    gap: 10px;
  }
`;

const ErrorMessage = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;

  ${theme.response.tablet} {
    width: 100%;
    font-size: 12px;
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
    width: 30px;
    height: 30px;
  }
`;
