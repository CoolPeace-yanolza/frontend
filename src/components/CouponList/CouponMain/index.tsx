import styled from '@emotion/styled';
import React from 'react';
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

  display: flex;
  flex-flow: row wrap;
  gap: 36px;
`;
