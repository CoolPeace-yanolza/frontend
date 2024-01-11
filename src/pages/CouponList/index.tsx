// import CouponItem from '@components/CouponList/CouponItem/CouponExpose';
// import CouponStop from '@components/CouponList/CouponItem/CouponStop';
import CouponExpired from '@components/CouponList/CouponItem/CouponExpired';
import CouponExpose from '@components/CouponList/CouponItem/CouponExpose';
import CouponStop from '@components/CouponList/CouponItem/CouponStop';
import CouponWait from '@components/CouponList/CouponItem/CouponWait';
import styled from '@emotion/styled';
import React from 'react';

const CouponList = () => {
  return (
    <CouponWrap>
      <CouponExpired />
      <CouponExpose />
      <CouponStop />
      <CouponWait />
    </CouponWrap>
  );
};

export default CouponList;

const CouponWrap = styled.div`
  display: flex;
`;
