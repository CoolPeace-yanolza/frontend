import styled from '@emotion/styled';

import {
  CouponHeader,
  CouponNav,
  CouponMain,
  CouponBanner
} from '@components/CouponList';

const CouponList = () => {
  return (
    <div>
      <CouponHeader />
      <CouponBanner />
      <CouponNav />
      <CouponMain />
    </div>
  );
};

export default CouponList;
