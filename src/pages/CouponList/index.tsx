import styled from '@emotion/styled';
import React from 'react';
import { CouponHeader, CouponNav, CouponMain } from '@components/CouponList';

const CouponList = () => {
  return (
    <CouponListContainer>
      <CouponHeader />
      <CouponNav />
      <CouponMain />
    </CouponListContainer>
  );
};

export default CouponList;

const CouponListContainer = styled.div``;
