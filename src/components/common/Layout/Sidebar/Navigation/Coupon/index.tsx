import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import toggle from '@assets/icons/ic-sidebar-toggle.svg';
import coupon from '@assets/icons/ic-sidebar-coupon.svg';
import CouponNav from './CouponNav';
import CostumeNavLink from '../CostumeNavLink';
import { Opens, SidebarOpen, SidebarStyleProps } from '@/types/layout';

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
      $issidebaropen={isSidebarOpen}
      $istoggleopen={isToggleOpen}
      $userpath={userPath}
      {...(isSidebarOpen && {
        onClick: e => e.preventDefault()
      })}
    >
      <Header
        $issidebaropen={isSidebarOpen}
        $istoggleopen={isToggleOpen}
      >
        <Contents $issidebaropen={isSidebarOpen}>
          <CouponIcon
            src={coupon}
            alt="쿠폰"
            $issidebaropen={isSidebarOpen}
          />
          <span>쿠폰</span>
        </Contents>
        <Toggle
          $issidebaropen={isSidebarOpen}
          $istoggleopen={isToggleOpen}
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

const Container = styled(CostumeNavLink)<SidebarStyleProps>`
  width: 100%;
  height: ${props => {
    if (!props.$issidebaropen) {
      return '80px';
    } else if (props.$istoggleopen) {
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
    if (props.$userpath === 'coupons') {
      return props.theme.colors.white;
    } else if (props.$istoggleopen) {
      return props.theme.colors.white;
    } else {
      return props.theme.colors.black;
    }
  }};

  background-color: ${props => {
    if (props.$userpath === 'coupons') {
      return props.theme.colors.hover;
    } else if (props.$issidebaropen) {
      return props.$istoggleopen ? props.theme.colors.ink100 : 'transparent';
    } else {
      return 'transparent';
    }
  }};

  font-weight: ${props => props.theme.fontWeight.large};

  overflow: hidden;

  ${props => (props.$issidebaropen ? 'cursor: default;' : 'cursor: pointer;')};

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
  height: ${props => (props.$issidebaropen ? '60px' : '75px')};

  display: flex;
  flex-direction: ${props => (props.$issidebaropen ? 'row' : 'column')};
  justify-content: ${props => (props.$issidebaropen ? 'flex-start' : 'center')};
  align-items: center;
`;

const Toggle = styled.button<Opens>`
  width: 20px;
  height: 20px;

  margin-right: 20px;
  border: none;

  display: ${props => (props.$issidebaropen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: transparent;

  cursor: pointer;

  transition: all 0.4s;
  transform: rotate(${props => (props.$istoggleopen ? '180deg' : '0deg')});
`;

const ToggleIcon = styled.img`
  width: 15px;
  height: 10px;
`;

const CouponIcon = styled.img<SidebarOpen>`
  width: 20px;
  height: 25px;

  margin: ${props => (props.$issidebaropen ? '0 10px 0 25px' : '10px')};
`;
