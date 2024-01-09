import styled from '@emotion/styled';

import Coupon from './Coupon';
import Settlements from './Settlements';
import { toRem } from '@utils/index';

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
  width: ${props => (props.$isSidebarOpen ? '100%' : toRem(80))};

  display: flex;
  flex-direction: column;

  font-size: ${props => (props.$isSidebarOpen ? toRem(14) : toRem(12))};
`;
