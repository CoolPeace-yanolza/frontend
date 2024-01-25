import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import theme from '@styles/theme';

const LoginTitle = () => {
  return (
    <TitleWrapper>
      <LogoIcon
        src={logo}
        alt="사장님 비서ya"
      />
      <Title>통합 로그인</Title>
    </TitleWrapper>
  );
};

export default LoginTitle;

const LogoIcon = styled.img`
  width: 288px;

  @media screen and (max-width: 649px) {
    width: 200px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 649px) {
    gap: 5px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #1a2849;
  font-family: 'Noto Sans KR';
  font-size: 44px;
  font-weight: 800;

  @media screen and (max-width: 649px) {
    font-size: 31px;
  }
`;
