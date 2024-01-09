import styled from '@emotion/styled';

import hamberger from '@assets/icons/ic-sidebar-hamberger.svg';
import logo from '@assets/icons/ic-logo.svg';

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
  width: 3.75rem;
  height: 3.75rem;

  margin: 0.3125rem 0.625rem;
  border: none;
  border-radius: 0.6875rem;

  background-color: transparent;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: #e9eef6;
  }
`;

const HambergerIcon = styled.img`
  width: 1.875rem;
  height: 1.25rem;
`;

const LogoIcon = styled.img`
  width: 7.5rem;
  height: 1.875rem;

  margin-right: 1.8rem;
`;
