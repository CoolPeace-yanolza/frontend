import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import home from '@assets/icons/ic-sidebar-home.svg';
import coupons from '@assets/icons/ic-sidebar-coupons.svg';
import couponRegister from '@assets/icons/ic-sidebar-coupon-register.svg';
import theme from '@styles/theme';

const CouponNav = () => {
  return (
    <Container>
      <Link
        to="/"
        end
      >
        <Icon
          src={home}
          alt="홈"
        />
        <span>홈</span>
      </Link>
      <Link
        to="/coupons"
        end
      >
        <Icon
          src={coupons}
          alt="쿠폰 조회"
        />
        <span>쿠폰 조회</span>
      </Link>
      <Link
        to="/coupons/register"
        end
      >
        <Icon
          src={couponRegister}
          alt="쿠폰 등록"
        />
        <span>쿠폰 등록</span>
      </Link>
    </Container>
  );
};

export default CouponNav;

const Container = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 14px;

  &:hover {
    color: ${theme.colors.white};
  }

  &:last-child {
    margin-bottom: 10px;
  }
`;

const Link = styled(NavLink)`
  width: 190px;
  height: 50px;

  margin: 5px;
  border-radius: 11px;
  padding: 10px 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${theme.colors.white};

  font-size: 14px;
  font-weight: 400;

  box-sizing: border-box;

  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &.active {
    color: ${theme.colors.white};
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 15px;
`;
