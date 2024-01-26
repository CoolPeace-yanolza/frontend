import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import { LayoutStyleProps } from '@/types/layout';
import theme from '@styles/theme';

const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Sidebar />
      <Section>
        <Header />
        <OutletLayout $pathname={location.pathname}>
          <Outlet />
        </OutletLayout>
      </Section>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;

  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  max-height: 100vh;

  display: flex;

  background-color: ${theme.colors.background};
  overflow: hidden;

  z-index: 100;

  ${theme.response.tablet} {
    background-color: white;
  }
`;

const Section = styled.section`
  --sidebar-width: 100px;

  width: 100%;
  min-width: calc(100vh - var(--sidebar-width));
  height: 100vh;

  margin-left: 100px;
  padding: 13px 22px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    min-width: 0;

    margin-left: 0;
    padding: 0;
  }
`;

const OutletLayout = styled.div<LayoutStyleProps>`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  margin-top: 16px;
  border-radius: 20px;

  background-color: ${props => {
    if (props.$pathname === '/') {
      return 'transparent';
    } else if (props.$pathname === '/coupons/report') {
      return 'transparent';
    } else {
      return theme.colors.white;
    }
  }};

  overflow: auto;

  ${theme.response.tablet} {
    width: 100vw;

    margin-top: 0;
    border-radius: 0;

    overflow-x: hidden;
    overflow-y: auto;
  }
`;
