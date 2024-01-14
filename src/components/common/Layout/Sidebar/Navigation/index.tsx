import styled from '@emotion/styled';

import Coupon from './Coupon';
import Settlements from './Settlements';
import { SidebarOpen } from '@/types/layout';

const Navigation = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <Container $issidebaropen={isSidebarOpen}>
      <Coupon isSidebarOpen={isSidebarOpen} />
      <Settlements isSidebarOpen={isSidebarOpen} />
    </Container>
  );
};

export default Navigation;

const Container = styled.nav<SidebarOpen>`
  width: ${props => (props.$issidebaropen ? '100%' : '80px')};

  display: flex;
  flex-direction: column;

  font-size: ${props => (props.$issidebaropen ? '14px' : '12px')};
`;
