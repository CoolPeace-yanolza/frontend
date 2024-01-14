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
  width: 100%;

  margin-left: 50px;
  gap: 36px;

  display: flex;
  flex-flow: row wrap;
`;
