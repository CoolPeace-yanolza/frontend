import styled from '@emotion/styled';

import hamburger from '@assets/icons/ic-sidebar-hamburger.svg';
import logo from '@assets/icons/ic-logo.svg';
import { SidebarHeader, SidebarOpen } from '@/types/layout';
import theme from '@styles/theme';

const Header = ({ isSidebarOpen, setIsSidebarOpen }: SidebarHeader) => {
  return (
    <Container $isSidebarOpen={isSidebarOpen}>
      <Hamburger onClick={() => setIsSidebarOpen(prev => !prev)}>
        <HamburgerIcon
          src={hamburger}
          alt="메뉴"
        />
      </Hamburger>
      {isSidebarOpen && (
        <LogoIcon
          src={logo}
          alt="사장님 비서ya"
        />
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div<SidebarOpen>`
  width: 100%;
  height: 100%;

  margin-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  ${theme.response.tablet} {
    margin-left: 5px;
  }
`;

const Hamburger = styled.button`
  width: 60px;
  height: 60px;

  margin: 5px 10px;
  border: none;
  border-radius: 11px;

  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #e9eef6;
  }

  ${theme.response.tablet} {
    width: 50px;
    height: 50px;

    margin: 8px 10px;
    padding: 0 6px;
  }
`;

const HamburgerIcon = styled.img`
  width: 30px;
  height: 20px;

  ${theme.response.tablet} {
    width: 21px;
    height: 14px;
  }
`;

const LogoIcon = styled.img`
  width: 120px;
  height: 30px;

  margin-right: 30px;
`;
