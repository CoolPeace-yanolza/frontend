import styled from '@emotion/styled';

import settlement from '@assets/icons/ic-sidebar-settlement.svg';
import CustomNavLink from '../CustomNavLink';
import { SidebarOpen } from '@/types/layout';

const Settlements = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <Container
      to="/settlements"
      end
      $issidebaropen={isSidebarOpen}
    >
      <Contents $issidebaropen={isSidebarOpen}>
        <SettlementsIcon
          src={settlement}
          alt="정산관리"
          $issidebaropen={isSidebarOpen}
        />
        <span>정산관리</span>
      </Contents>
    </Container>
  );
};

export default Settlements;

const Container = styled(CustomNavLink)<SidebarOpen>`
  width: 100%;
  height: ${props => (props.$issidebaropen ? '60px' : '80px')};

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
  width: ${props => (props.$issidebaropen ? '100%' : '80px')};
  height: 100%;

  display: flex;
  flex-direction: ${props => (props.$issidebaropen ? 'row' : 'column')};
  justify-content: ${props => (props.$issidebaropen ? 'flex-start' : 'center')};
  align-items: center;
`;

const SettlementsIcon = styled.img<SidebarOpen>`
  width: 30px;
  height: 30px;

  margin: ${props => (props.$issidebaropen ? '0 10px 0 20px' : '0 0 5px 0')};
`;
