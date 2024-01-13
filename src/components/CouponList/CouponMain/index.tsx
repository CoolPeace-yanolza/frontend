import styled from '@emotion/styled';
import React from 'react';

import CouponExposeA from '../CouponItem/CouponExposeA';

const CouponMain = () => {
  return (
    <MainContainer>
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
      <CouponExposeA />
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
