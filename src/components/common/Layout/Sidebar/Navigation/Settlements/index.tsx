import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import settlement from '@assets/icons/ic-sidebar-settlement.svg';
import { toRem } from '@utils/index';

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
  height: ${props => (props.$isSidebarOpen ? toRem(60) : toRem(80))};

  margin: ${toRem(5)} 0;
  border-radius: ${toRem(11)};

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
  width: ${props => (props.$isSidebarOpen ? '100%' : toRem(80))};
  height: 100%;

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'row' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const SettlementsIcon = styled.img<SidebarOpen>`
  width: ${toRem(25)};
  height: ${toRem(20)};

  margin: ${props =>
    props.$isSidebarOpen ? `0 ${toRem(10)} 0 ${toRem(23)}` : toRem(10)};
`;
