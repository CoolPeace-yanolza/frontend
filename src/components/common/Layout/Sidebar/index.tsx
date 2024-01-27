import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import { SidebarOpen } from '@/types/layout';
import theme from '@styles/theme';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const locationPathname = location.pathname;
  const [prevLocation, setPrevLocation] = useState('');

  // 링크 이동 시 사이드바 닫힘
  useEffect(() => {
    if (prevLocation !== locationPathname) setIsSidebarOpen(false);
  }, [prevLocation, locationPathname]);

  useEffect(() => {
    setPrevLocation(locationPathname);
  }, [locationPathname]);

  return (
    <>
      <Container $isSidebarOpen={isSidebarOpen}>
        <Menu>
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Navigation isSidebarOpen={isSidebarOpen} />
        </Menu>
      </Container>
      {isSidebarOpen && (
        <LeftoverScreen onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;

const Container = styled.div<SidebarOpen>`
  position: fixed;

  width: ${props => (props.$isSidebarOpen ? '250px' : '100px')};
  min-height: 100%;

  padding: 20px 10px;

  background-color: ${theme.colors.white};
  overflow: hidden;
  z-index: ${props => (props.$isSidebarOpen ? 100 : 90)};
  transition: all 0.3s;

  ${theme.response.tablet} {
    display: none;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;
`;

const LeftoverScreen = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;

  background-color: #4242427c;
  z-index: 90;
`;
