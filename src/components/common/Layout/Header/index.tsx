import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import user from '@assets/icons/ic-header-user.svg';
import Select from './Select';

const Header = () => {
  return (
    <Container>
      <LogoLink
        to="/"
        end
      >
        <LogoIcon
          src={logo}
          alt="사장님 비서ya"
        />
      </LogoLink>
      <Buttons>
        <Select />
        <UserIcon
          src={user}
          alt="사용자 프로필"
        />
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 85px;

  border-radius: 20px;
  padding: 20px;
  padding-left: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};
`;

const LogoLink = styled(NavLink)`
  width: 140px;
  height: 30px;
`;

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
`;

const UserIcon = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;
