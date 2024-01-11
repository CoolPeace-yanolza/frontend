import styled from '@emotion/styled';
import React from 'react';
import CouponExpose from '../CouponItem/CouponExpose';
import CouponExpired from '../CouponItem/CouponExpired';
import CouponStop from '../CouponItem/CouponStop';
import CouponWait from '../CouponItem/CouponWait';

const CouponMain = () => {
  return (
    <MainContainer>
      <CouponExpose />
      <CouponExpired />
      <CouponStop />
      <CouponWait />
    </MainContainer>
  );
};

export default CouponMain;

const MainContainer = styled.div`
  margin: 14px 34.5px;

  display: flex;
  justify-content: space-around;
`;
