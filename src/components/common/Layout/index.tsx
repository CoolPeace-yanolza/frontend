import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Section>
        <Header />
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </Section>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;

  min-width: 100vw;
  min-height: 100vh;

  display: flex;

  background-color: ${props => props.theme.colors.background};
`;

const Section = styled.section`
  width: 100%;
  min-height: 100%;

  margin-left: 6.25rem;
  padding: 0.8rem 1.4rem;

  display: flex;
  flex-direction: column;
`;

const OutletLayout = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 1rem;
  border-radius: 1.25rem;

  background-color: ${props => props.theme.colors.white};
`;
