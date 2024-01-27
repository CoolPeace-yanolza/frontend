import { useState } from 'react';

import styled from '@emotion/styled';
import hamburger from '@assets/icons/ic-sidebar-hamburger.svg';
import OpenMobileSidebar from './OpenMobileSidebar';

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Container onClick={() => setIsSidebarOpen(prev => !prev)}>
        <HamburgerIcon
          src={hamburger}
          alt="메뉴"
        />
      </Container>
      <OpenMobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default MobileSidebar;

const Container = styled.div`
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
