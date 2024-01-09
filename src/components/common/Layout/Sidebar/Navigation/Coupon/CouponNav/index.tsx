import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import home from '@assets/icons/ic-sidebar-home.svg';
import coupons from '@assets/icons/ic-sidebar-coupons.svg';
import couponRegister from '@assets/icons/ic-sidebar-couponRegister.svg';

const CouponNav = () => {
  return (
    <Container>
      <Link
        to="/"
        end
      >
        <HomeIcon
          src={home}
          alt="홈"
        />
        <span>홈</span>
      </Link>
      <Link
        to="/coupons"
        end
      >
        <CouponsIcon
          src={coupons}
          alt="쿠폰 조회"
        />
        <span>쿠폰 조회</span>
      </Link>
      <Link
        to="/coupons/register"
        end
      >
        <CouponRegisterIcon
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

  font-size: 0.875rem;

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  &:last-child {
    margin-bottom: 0.625rem;
  }
`;

const Link = styled(NavLink)`
  width: 11.875rem;
  height: 3.125rem;

  margin: 0.3125rem;
  border-radius: 0.6875rem;
  padding: 0.625rem 0.75rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${props => props.theme.colors.white};

  font-size: 0.875rem;
  font-weight: 400;

  box-sizing: border-box;

  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const HomeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 0.9375rem;
`;

const CouponsIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 0.9375rem;
`;

const CouponRegisterIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 0.9375rem;
`;
