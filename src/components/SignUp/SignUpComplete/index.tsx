import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import firecracker from '@assets/icons/ic-signup-firecracker.svg';
import { AuthButton } from '@components/Auth';

const SignUpComplete = () => {
  const navigate = useNavigate();
  const moveToLogin = () => navigate('/login', { replace: true });

  return (
    <>
      <Logo>
        <LogoIcon
          src={logo}
          alt="사장님 비서ya"
        />
      </Logo>
      <Content>
        <Image
          src={firecracker}
          alt="폭죽 이미지"
        />
        <Title>회원가입 완료!</Title>
        <Description>
          <p>가입해주셔서 감사합니다.</p>
          <p>지금 바로 사장님만의 혜택을 받아보세요!</p>
        </Description>
        <AuthButton
          size="large"
          variant="navy"
          text="로그인 페이지로 이동"
          buttonFunc={moveToLogin}
        />
      </Content>
    </>
  );
};

export default SignUpComplete;

const Logo = styled.div`
  height: 36px;

  margin-top: 48px;
  margin-left: 57px;

  @media screen and (max-width: 649px) {
    height: 30px;

    margin-top: 26px;
    margin-left: 26px;
  }
`;

const LogoIcon = styled.img`
  width: 172.8px;
  height: 100%;

  @media screen and (max-width: 649px) {
    width: 142px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  @media screen and (max-width: 649px) {
    max-width: 295px;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 151px;
  height: 151px;

  margin-bottom: 33px;

  @media screen and (max-width: 649px) {
    width: 130px;
    height: 130px;
  }
`;

const Title = styled.h1`
  margin-bottom: 31px;

  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 35px;
  font-weight: 700;
  line-height: 41.98px;
  letter-spacing: -1.05px;

  background: linear-gradient(
    122deg,
    #111f3f 37.38%,
    rgba(26, 40, 73, 0.75) 87.92%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 649px) {
    margin-bottom: 20px;

    font-size: 24px;
  }
`;

const Description = styled.div`
  margin-bottom: 74px;

  color: #090a0a;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;

  @media screen and (max-width: 649px) {
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 25px;
  }
`;
