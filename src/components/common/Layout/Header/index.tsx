import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import Buttons from './Buttons';

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

      <Buttons />
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
