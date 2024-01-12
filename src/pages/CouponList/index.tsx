import CouponHeader from '@components/CouponList/CouponHeader';
import CouponMain from '@components/CouponList/CouponMain';
import CouponNav from '@components/CouponList/CouponNav';
import styled from '@emotion/styled';
import React from 'react';

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

const CouponListContainer = styled.div`
  min-width: 100%;
  height: 100%;
`;
