import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import Select from './Select';
import User from './User';
import theme from '@styles/theme';

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
        <div></div>
        <Select />
        <User />
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 85px;

  border-radius: 20px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.colors.white};

  @media screen and (max-width: 1200px) {
    height: 65px;

    border-bottom: 1px solid #e6e6e6;
    border-radius: 0;
  }
`;

const LogoLink = styled(NavLink)`
  width: 140px;
  height: 30px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;

    justify-content: space-between;
  }
`;
