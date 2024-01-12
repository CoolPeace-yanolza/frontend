import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import settlement from '@assets/icons/ic-sidebar-settlement.svg';
import { SidebarOpen } from '@/types/sidebar';

const Settlements = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <Container
      to="/settlements"
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

const Container = styled(NavLink)<SidebarOpen>`
  width: 100%;
  height: ${props => (props.$isSidebarOpen ? '60px' : '80px')};

  margin: 5px 0;
  border-radius: 11px;

  color: ${props => props.theme.colors.black};

  font-weight: ${props => props.theme.fontWeight.large};

  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.hover};
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
