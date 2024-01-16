import styled from '@emotion/styled';
import {
  CouponExpired,
  CouponExpose,
  CouponStop,
  CouponWait
} from '../CouponItem';

const CouponMain = () => {
  return (
    <MainContainer>
      <CouponExpose />
      <CouponStop />
      <CouponWait />
      <CouponExpired />
    </MainContainer>
  );
};

export default CouponMain;

const MainContainer = styled.div`
  margin-left: 50px;
  margin-bottom: 30px;

  display: flex;
  flex-flow: row wrap;
  gap: 36px;
`;
