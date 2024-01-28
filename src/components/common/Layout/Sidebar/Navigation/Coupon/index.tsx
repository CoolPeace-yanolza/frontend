import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import toggle from '@assets/icons/ic-sidebar-toggle.svg';
import coupon from '@assets/icons/ic-sidebar-coupon.svg';
import CouponNav from './CouponNav';
import CustomNavLink from '../CustomNavLink';
import { Opens, SidebarOpen, SidebarStyleProps } from '@/types/layout';
import theme from '@styles/theme';

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
      end
      $isSidebarOpen={isSidebarOpen}
      $isToggleOpen={isToggleOpen}
      $userPath={userPath}
      {...(isSidebarOpen && {
        onClick: e => e.preventDefault()
      })}
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
          $isToggleOpen={isToggleOpen}
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

const Container = styled(CustomNavLink)<SidebarStyleProps>`
  width: 100%;
  height: ${props => {
    if (!props.$isSidebarOpen) {
      return '80px';
    } else if (props.$isToggleOpen) {
      return '250px';
    } else {
      return '60px';
    }
  }};

  margin: 5px 0;
  border-radius: 11px;

  display: flex;
  flex-direction: column;

  color: ${props => {
    if (props.$userPath === 'coupons') {
      return theme.colors.white;
    } else if (props.$isToggleOpen) {
      return theme.colors.white;
    } else {
      return theme.colors.black;
    }
  }};

  background-color: ${props => {
    if (props.$userPath === 'coupons') {
      return theme.colors.hover;
    } else if (props.$isSidebarOpen) {
      return props.$isToggleOpen ? theme.colors.ink100 : 'transparent';
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
    color: ${theme.colors.white};
    background-color: ${theme.colors.hover};
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
  height: ${props => (props.$isSidebarOpen ? '60px' : '75px')};

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'row' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const Toggle = styled.button<Opens>`
  width: 20px;
  height: 20px;

  margin-right: 20px;
  border: none;

  display: ${props => (props.$isSidebarOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: transparent;

  cursor: pointer;

  transition: all 0.4s;
  transform: rotate(${props => (props.$isToggleOpen ? '180deg' : '0deg')});
`;

const ToggleIcon = styled.img`
  width: 15px;
  height: 10px;
`;

const CouponIcon = styled.img<SidebarOpen>`
  width: 20px;
  height: 25px;

  margin: ${props => (props.$isSidebarOpen ? '0 10px 0 25px' : '10px')};
`;
