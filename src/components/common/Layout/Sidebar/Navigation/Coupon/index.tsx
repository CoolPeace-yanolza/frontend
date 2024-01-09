import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import CouponNav from './CouponNav';
import toggle from '@assets/icons/ic-sidebar-toggle.svg';
import coupon from '@assets/icons/ic-sidebar-coupon.svg';

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
      return '5rem';
    } else if (props.$isToggleOpen) {
      return '15.635rem';
    } else {
      return '3.75rem';
    }
  }};

  margin: 0.3125rem 0;
  border-radius: 0.6875rem;

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
  height: ${props => (props.$isSidebarOpen ? '3.75rem' : '4.6875rem')};

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'row' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const Toggle = styled.button<SidebarOpen>`
  width: 1.25rem;
  height: 100%;

  margin-right: 1.25rem;
  border: none;

  display: ${props => (props.$isSidebarOpen ? 'relative' : 'none')};

  background-color: transparent;

  cursor: pointer;
`;

const ToggleIcon = styled.img`
  width: 0.9375rem;
  height: 0.625rem;
`;

const CouponIcon = styled.img<SidebarOpen>`
  width: 1.25rem;
  height: 1.5625rem;

  margin: ${props =>
    props.$isSidebarOpen ? '0 0.625rem 0 1.5625rem' : '0.625rem'};
`;
