import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import { toRem } from '@utils/index';
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
  height: ${toRem(85)};

  border-radius: ${toRem(20)};
  padding: ${toRem(20)};
  padding-left: ${toRem(30)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};
`;

const LogoLink = styled(NavLink)`
  width: ${toRem(140)};
  height: ${toRem(30)};
`;

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
`;
