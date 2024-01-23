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
`;

const Header = styled.div`
  width: 100%;

  padding: 10px 12px 7px;

  align-self: flex-start;

  font-size: 13px;
  font-weight: 700;

  white-space: nowrap;
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
`;
