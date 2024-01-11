import CouponHeader from '@components/CouponList/CouponHeader';
import CouponMain from '@components/CouponList/CouponMain';
import CouponNav from '@components/CouponList/CouponNav';
import React from 'react';

const CouponList = () => {
  return (
    <div>
      <CouponHeader />
      <CouponNav />
      <CouponMain />
    </div>
  );
};

export default CouponList;
