import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import CouponNav from './CouponNav';
import toggle from '@assets/icons/ic-sidebar-toggle.svg';
import coupon from '@assets/icons/ic-sidebar-coupon.svg';
import { toRem } from '@utils/index';

const Coupon = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const location = useLocation();
  const userPath = location.pathname.split('/')[1];

  useEffect(
    () => (isSidebarOpen ? setIsToggleOpen(true) : setIsToggleOpen(false)),
    [isSidebarOpen]
  );

  return (
    <Container
      to="/"
      $isSidebarOpen={isSidebarOpen}
      $isToggleOpen={isToggleOpen}
      $userPath={userPath}
      {...(isSidebarOpen && {
        onClick: e => e.preventDefault()
      })}
      end
    >
      <Header
        $isSidebarOpen={isSidebarOpen}
        $isToggleOpen={isToggleOpen}
      >
        <Contents $isSidebarOpen={isSidebarOpen}>
          <CouponIcon
            src={coupon}
            alt="쿠폰"
            $isSidebarOpen={isSidebarOpen}
          />
          <span>쿠폰</span>
        </Contents>
        <Toggle
          $isSidebarOpen={isSidebarOpen}
          onClick={() => setIsToggleOpen(prev => !prev)}
        >
          <ToggleIcon
            src={toggle}
            alt="토글"
          />
        </Toggle>
      </Header>
      {isSidebarOpen && <CouponNav />}
    </Container>
  );
};

export default Coupon;

const Container = styled(NavLink)<SidebarStyleProps>`
  width: 100%;
  height: ${props => {
    if (!props.$isSidebarOpen) {
      return toRem(80);
    } else if (props.$isToggleOpen) {
      return toRem(250);
    } else {
      return toRem(60);
    }
  }};

  margin: ${toRem(5)} 0;
  border-radius: ${toRem(11)};

  display: flex;
  flex-direction: column;

  color: ${props => {
    if (props.$userPath === 'coupons') {
      return props.theme.colors.white;
    } else if (props.$isToggleOpen) {
      return props.theme.colors.white;
    } else {
      return props.theme.colors.black;
    }
  }};

  // HACK: 조건 단순화 필요
  background-color: ${props => {
    if (props.$userPath === 'coupons') {
      return props.theme.colors.hover;
    } else if (props.$isSidebarOpen) {
      return props.$isToggleOpen ? props.theme.colors.ink100 : 'transparent';
    } else {
      return 'transparent';
    }
  }};

  font-weight: ${props => props.theme.fontWeight.large};

  overflow: hidden;
  cursor: ${props => (props.$isSidebarOpen ? 'default' : 'pointer')};

  transition: all 0.3s;

  &:hover,
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.hover};
  }
`;

const Header = styled.div<Opens>`
  width: 100%;
  height: 100%;

  display: flex;

  transition: all 0.3s;
`;

const Contents = styled.div<SidebarOpen>`
  width: 100%;
  height: ${props => (props.$isSidebarOpen ? toRem(60) : toRem(75))};

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'row' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const Toggle = styled.button<SidebarOpen>`
  width: ${toRem(20)};
  height: 100%;

  margin-right: ${toRem(20)};
  border: none;

  display: ${props => (props.$isSidebarOpen ? 'relative' : 'none')};

  background-color: transparent;

  cursor: pointer;
`;

const ToggleIcon = styled.img`
  width: ${toRem(15)};
  height: ${toRem(10)};
`;

const CouponIcon = styled.img<SidebarOpen>`
  width: ${toRem(20)};
  height: ${toRem(25)};

  margin: ${props =>
    props.$isSidebarOpen ? `0 ${toRem(10)} 0 ${toRem(25)}` : toRem(10)};
`;
