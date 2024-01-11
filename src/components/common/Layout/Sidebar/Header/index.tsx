import styled from '@emotion/styled';

import hamberger from '@assets/icons/ic-sidebar-hamberger.svg';
import logo from '@assets/icons/ic-logo.svg';
import { SidebarHeader } from '@/types/sidebar';

const Header = ({ isSidebarOpen, setIsSidebarOpen }: SidebarHeader) => {
  return (
    <Container>
      <Hamberger onClick={() => setIsSidebarOpen(prev => !prev)}>
        <HambergerIcon
          src={hamberger}
          alt="메뉴"
        />
      </Hamberger>
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

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hamberger = styled.button`
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
`;

const HambergerIcon = styled.img`
  width: 30px;
  height: 20px;
`;

const LogoIcon = styled.img`
  width: 120px;
  height: 30px;

  margin-right: 30px;
`;
