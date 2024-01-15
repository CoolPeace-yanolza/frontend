import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';

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
  height: 60px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;

  text-align: center;
`;

const Title = styled.h1`
  color: #1a2849;
  font-size: 44.374px;
  font-weight: 900;
  line-height: 51.769px;
`;
