import styled from '@emotion/styled';

import settlement from '/images/ic-sidebar-settlement.png';
import CustomNavLink from '../CustomNavLink';
import { SidebarOpen } from '@/types/layout';
import theme from '@styles/theme';

const Settlements = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <Container
      to="/settlements"
      end
      $isSidebarOpen={isSidebarOpen}
    >
      <Contents $isSidebarOpen={isSidebarOpen}>
        <SettlementsIcon
          src={settlement}
          alt="정산관리"
          $isSidebarOpen={isSidebarOpen}
        />
        <span>정산관리</span>
      </Contents>
    </Container>
  );
};

export default Settlements;

const Container = styled(CustomNavLink)<SidebarOpen>`
  width: 100%;
  height: ${props => (props.$isSidebarOpen ? '60px' : '80px')};

  margin: 5px 0;
  border-radius: 11px;

  color: ${theme.colors.black};

  font-weight: ${theme.fontWeight.large};

  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.hover};
  }

  &:link {
    text-decoration: none;
  }
`;

const Contents = styled.div<SidebarOpen>`
  width: ${props => (props.$isSidebarOpen ? '100%' : '80px')};
  height: 100%;

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'row' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const SettlementsIcon = styled.img<SidebarOpen>`
  width: 30px;
  height: 30px;

  margin: ${props => (props.$isSidebarOpen ? '0 10px 0 20px' : '0 0 5px 0')};
`;
