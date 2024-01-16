import styled from '@emotion/styled';

import CouponExpose from '../CouponItem';

const CouponMain = () => {
  return (
    <MainContainer>
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
      <CouponExpose />
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
