import styled from '@emotion/styled';

import hamberger from '@assets/icons/ic-sidebar-hamberger.svg';
import logo from '@assets/icons/ic-logo.svg';
import { toRem } from '@utils/index';

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
  width: ${toRem(60)};
  height: ${toRem(60)};

  margin: ${toRem(5)} ${toRem(10)};
  border: none;
  border-radius: ${toRem(11)};

  background-color: transparent;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: #e9eef6;
  }
`;

const HambergerIcon = styled.img`
  width: ${toRem(30)};
  height: ${toRem(20)};
`;

const LogoIcon = styled.img`
  width: ${toRem(120)};
  height: ${toRem(30)};

  margin-right: ${toRem(30)};
`;
