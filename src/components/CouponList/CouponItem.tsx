import React from 'react';
import exposeIcon from '@assets/icons/CouponList/ic_expose.svg';
import toggleOnIcon from '@assets/icons/CouponList/ic_toggle_on.svg';

const CouponItem = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src={exposeIcon}
            alt="exposeIcon"
          />
          <p>현재 노출 중</p>
        </div>
        <button>
          <p>ON</p>
          <img
            src={toggleOnIcon}
            alt="toggleOnIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default CouponItem;
