import styled from '@emotion/styled';
import React from 'react';
import CouponExpose from '../CouponItem/CouponExpose';
import CouponExpired from '../CouponItem/CouponExpired';
import CouponStop from '../CouponItem/CouponStop';
import CouponWait from '../CouponItem/CouponWait';
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
    </MainContainer>
  );
};

export default CouponMain;

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin-left: 50px;
`;
