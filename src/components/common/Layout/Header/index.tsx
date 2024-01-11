import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
// HACK: 디자이너에게 유저 아이콘 다시 받을 예정
import user from '@assets/icons/ic-header-user.svg';
import { toRem } from '@utils/index';
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
          alt="사장님 비서ya"
        />
      </Buttons>
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

const Buttons = styled.div`
  display: flex;
`;

const UserIcon = styled.img`
  width: ${toRem(40)};
  height: ${toRem(40)};

  border-radius: 50%;
`;
