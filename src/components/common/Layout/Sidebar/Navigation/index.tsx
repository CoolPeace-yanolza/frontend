import styled from '@emotion/styled';

import Coupon from './Coupon';
import Settlements from './Settlements';

const Navigation = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <Container $isSidebarOpen={isSidebarOpen}>
      <Coupon isSidebarOpen={isSidebarOpen} />
      <Settlements isSidebarOpen={isSidebarOpen} />
    </Container>
  );
};

export default Navigation;

const Container = styled.nav<SidebarOpen>`
  width: ${props => (props.$isSidebarOpen ? '100%' : '5rem')};

  display: flex;
  flex-direction: column;

  font-size: ${props => (props.$isSidebarOpen ? '0.875rem' : '0.75rem')};
`;
