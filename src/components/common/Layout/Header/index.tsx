import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
// HACK: 디자이너에게 유저 아이콘 다시 받을 예정
import user from '@assets/icons/ic-header-user.svg';

const Header = () => {
  // HACK: 예시 데이터, 백엔드에 리스트로 넘겨 받기
  const selectList = [
    '영덕 아이스 풀빌라',
    '영덕 아이스 풀빌라2',
    '영덕 아이스 풀빌라3',
    '영덕 아이스 풀빌라4'
  ];
  const [selected, setSelected] = useState(selectList[0]);

  // HACK: select 값에 따른 API 요청을 어떻게 보낼 건지 논의 필요
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

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
        <Accommodations
          onChange={handleSelect}
          value={selected}
        >
          {selectList.map(item => (
            <Accommodation
              value={item}
              key={item}
            >
              {item}
            </Accommodation>
          ))}
        </Accommodations>

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
  height: 5.3rem;

  border-radius: 1.25rem;
  padding: 1.25rem;
  padding-left: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};

  box-sizing: border-box;
`;

const LogoLink = styled(NavLink)`
  width: 8.75rem;
  height: 1.875rem;
`;

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
`;

const Accommodations = styled.select`
  margin-right: 2rem;
`;

const Accommodation = styled.option``;

const UserIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
`;
