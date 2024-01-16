import styled from '@emotion/styled';

import {
  CouponHeader,
  CouponNav,
  CouponMain,
  CouponBanner
} from '@components/CouponList';

const CouponList = () => {
  return (
    <CouponListContainer>
      <CouponHeader />
      <CouponBanner />
      <CouponNav />
      <CouponMain />
    </CouponListContainer>
  );
};

export default CouponList;

const CouponListContainer = styled.div``;
