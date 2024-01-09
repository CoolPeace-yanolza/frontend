import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import settlement from '@assets/icons/ic-sidebar-settlement.svg';

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
        <SettlementsText>정산관리</SettlementsText>
      </Contents>
    </Container>
  );
};
export default Settlements;

const Container = styled(NavLink)<{ $isSidebarOpen?: boolean }>`
  width: 100%;
  height: ${props => (props.$isSidebarOpen ? '3.75rem' : '5rem')};

  margin: 0.3125rem 0;
  border-radius: 1.25rem;

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

const Contents = styled.div<{ $isSidebarOpen?: boolean }>`
  width: ${props => (props.$isSidebarOpen ? '100%' : '5rem')};
  height: 100%;

  display: flex;
  flex-direction: ${props => (props.$isSidebarOpen ? 'low' : 'column')};
  justify-content: ${props => (props.$isSidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
`;

const SettlementsIcon = styled.img<{ $isSidebarOpen?: boolean }>`
  width: 1.5625rem;
  height: 1.25rem;

  margin: ${props =>
    props.$isSidebarOpen ? '0 0.625rem 0 1.4375rem' : '0.625rem'};
`;

const SettlementsText = styled.span``;
