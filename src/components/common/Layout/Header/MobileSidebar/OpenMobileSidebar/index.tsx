import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import hamburger from '@assets/icons/ic-sidebar-hamburger.svg';
import toggle from '@assets/icons/ic-sidebar-toggle.svg';
import coupon from '@assets/icons/ic-sidebar-coupon.svg';
import logo from '@assets/icons/ic-logo.svg';
import CouponNav from '@components/common/Layout/Sidebar/Navigation/Coupon/CouponNav';
import Settlements from '@components/common/Layout/Sidebar/Navigation/Settlements';
import { SidebarOpen, ToggleOpen } from '@/types/layout';
import theme from '@styles/theme';

const OpenMobileSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  useEffect(() => {
    if (!isSidebarOpen) setIsToggleOpen(false);
  }, [isSidebarOpen]);

  return (
    <Container $isSidebarOpen={isSidebarOpen}>
      <Navigation>
        <Header>
          <Hamburger onClick={() => setIsSidebarOpen(prev => !prev)}>
            <HamburgerIcon
              src={hamburger}
              alt="메뉴"
            />
          </Hamburger>
          <LogoIcon
            src={logo}
            alt="사장님 비서ya"
          />
        </Header>
        <Coupon $isToggleOpen={isToggleOpen}>
          <div>
            <CouponHeader>
              <Contents>
                <CouponIcon
                  src={coupon}
                  alt="쿠폰"
                />
                <span>쿠폰</span>
              </Contents>
              <Toggle
                $isToggleOpen={isToggleOpen}
                onClick={() => setIsToggleOpen(prev => !prev)}
              >
                <ToggleIcon
                  src={toggle}
                  alt="토글"
                />
              </Toggle>
            </CouponHeader>
            <CouponNav />
          </div>
        </Coupon>
        <Settlements isSidebarOpen={true} />
      </Navigation>
      <LeftoverScreen
        $isSidebarOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
      />
    </Container>
  );
};

export default OpenMobileSidebar;

const Container = styled.div<SidebarOpen>`
  position: fixed;
  top: ${props => (props.$isSidebarOpen ? 0 : '-100vh')};
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 100;
  transition: all 0.5s;
`;

const Navigation = styled.div`
  width: 100%;

  padding: 10px;
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: white;
`;

const Header = styled.div`
  width: 100%;

  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 11px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e9eef6;
  }
`;

const HamburgerIcon = styled.img`
  width: 20px;
  height: 15px;
`;

const LogoIcon = styled.img`
  width: 120px;
  height: 25px;
`;

const Coupon = styled.div<ToggleOpen>`
  width: 100%;
  height: ${props => (props.$isToggleOpen ? '250px' : '60px')};

  margin: 30px 0 10px 0;
  border-radius: 11px;

  color: white;
  background-color: ${props =>
    props.$isToggleOpen ? '#1a2849' : theme.colors.ink100};
  font-size: 14px;
  overflow: hidden;
  transition: all 0.5s;
`;

const CouponHeader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  transition: all 0.3s;
`;

const Contents = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CouponIcon = styled.img`
  width: 20px;
  height: 25px;

  margin: 0 10px 0 25px;
`;

const Toggle = styled.button<ToggleOpen>`
  width: 20px;
  height: 20px;

  margin-right: 20px;
  border: none;

  display: flex;
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

const LeftoverScreen = styled.div<SidebarOpen>`
  width: 100%;
  height: 100%;

  background-color: #4242427c;
`;
