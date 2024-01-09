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
          <CouponText>쿠폰</CouponText>
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

const Container = styled(NavLink)<{
  $isSidebarOpen?: boolean;
  $isToggleOpen?: boolean;
  $userPath?: string;
}>`
  width: 100%;
  height: ${props =>
    props.$isSidebarOpen
      ? props.$isToggleOpen
        ? '15.635rem'
        : '3.75rem'
      : '5rem'};

  margin: 0.3125rem 0;
  border-radius: 0.6875rem;

  display: flex;
  flex-direction: column;

  // HACK: 조건 단순화 필요
  color: ${props =>
    props.$userPath === 'coupons'
      ? props.theme.colors.white
      : props.$isToggleOpen
        ? props.theme.colors.white
        : props.theme.colors.black};

  // HACK: 조건 단순화 필요
  background-color: ${props =>
    props.$userPath === 'coupons'
      ? props.theme.colors.hover
      : props.$isSidebarOpen
        ? props.$isToggleOpen
          ? props.theme.colors.ink100
          : 'transparent'
        : 'transparent'};

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

const Header = styled.div<{
  $isSidebarOpen?: boolean;
  $isToggleOpen?: boolean;
}>`
  width: 100%;
  height: 100%;

  display: flex;

  transition: all 0.3s;
`;

const Contents = styled.div<{ $isSidebarOpen?: boolean }>`
  width: 100%;
  height: ${props => (props.$isSidebarOpen ? '3.75rem' : '4.6875rem')};

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'low' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const Toggle = styled.button<{ $isSidebarOpen?: boolean }>`
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

const CouponIcon = styled.img<{ $isSidebarOpen?: boolean }>`
  width: 1.25rem;
  height: 1.5625rem;

  margin: ${props =>
    props.$isSidebarOpen ? '0 0.625rem 0 1.5625rem' : '0.625rem'};
`;

const CouponText = styled.span``;
