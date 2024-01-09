import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import home from '@assets/icons/ic-sidebar-home.svg';
import coupons from '@assets/icons/ic-sidebar-coupons.svg';
import couponRegister from '@assets/icons/ic-sidebar-couponRegister.svg';
import { toRem } from '@utils/index';

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

  font-size: ${toRem(14)};

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  &:last-child {
    margin-bottom: ${toRem(10)};
  }
`;

const Link = styled(NavLink)`
  width: ${toRem(190)};
  height: ${toRem(50)};

  margin: ${toRem(5)};
  border-radius: ${toRem(11)};
  padding: ${toRem(10)} ${toRem(12)};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${props => props.theme.colors.white};

  font-size: ${toRem(14)};
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

const Icon = styled.img`
  width: ${toRem(24)};
  height: ${toRem(24)};

  margin-right: ${toRem(15)};
`;
