import styled from '@emotion/styled';

import { CouponCounterProps, CouponCounterStyleProps } from '@/types/dashboard';
import { getStatusToLocaleString } from '@utils/index';

import theme from '@styles/theme';

const CouponCounter = ({ type, result }: CouponCounterProps) => {
  return (
    <Container $type={type}>
      <Header>{type === 'download' ? '｜다운로드 수' : '｜사용완료 수'}</Header>
      <ResultContainer $type={type}>
        {getStatusToLocaleString(result)}장
      </ResultContainer>
    </Container>
  );
};

export default CouponCounter;

const Container = styled.div<CouponCounterStyleProps>`
  width: 50%;
  height: 90%;

  padding: 20px 15px;
  border-radius: 14px;

  display: flex;
  flex-direction: column;

  background-color: ${props =>
    props.$type === 'download' ? '#fff' : '#022C79'};

  color: ${props => (props.$type === 'download' ? '#404446' : '#fff')};

  ${theme.response.tablet} {
    width: 100%;

    padding: 10px 0px;
    border-radius: 7px;

    align-items: center;
    justify-content: space-between;
  }
`;

const Header = styled.div`
  width: 100%;

  padding: 10px 12px 7px;

  align-self: flex-start;

  font-size: 13px;
  font-weight: 700;

  white-space: nowrap;

  ${theme.response.tablet} {
    padding: 0px 10px 5px;

    text-align: center;

    font-size: 11px;
  }
`;

const ResultContainer = styled.div<CouponCounterStyleProps>`
  width: 100%;
  height: 80%;

  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props =>
    props.$type === 'download' ? '#F7F8FC' : '#ffffff4d'};

  font-size: 18px;
  font-weight: 700;

  box-shadow: ${theme.shadow.medium};

  ${theme.response.tablet} {
    width: 85%;

    padding: 10px 0px;
    border-radius: 6px;

    align-self: center;

    font-size: 11px;

    white-space: nowrap;
  }
`;
