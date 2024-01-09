import React, { useState } from 'react';
import styled from '@emotion/styled';

const Login = () => {
  // HACK: 유효성 검사 기능 구현 후 유효성 메세지 노출 여부 결정
  const [isInvalid, setIsInvalid] = useState(true);
  return (
    <>
      <Container>
        <TitleWrapper>
          {/* HACK: 지훈님 레이아웃 pull받아서 로고 이미지로 변경 예정 */}
          <Title>사장님 비서ya</Title>
          <Title>통합 로그인</Title>
        </TitleWrapper>
        <form>
          <Inputs $isInvalid={isInvalid}>
            <Input
              type="email"
              placeholder="이메일 입력"
            />
            <Input
              type="password"
              placeholder="비밀번호 입력"
            />
          </Inputs>
          {isInvalid && (
            <ValidationText>
              <ValidationBoldText>아이디</ValidationBoldText>를 입력해 주세요
            </ValidationText>
          )}
          <Buttons $isInvalid={isInvalid}>
            <LoginButton $type="login">로그인</LoginButton>
            <SignUpButton $type="signUp">회원가입</SignUpButton>
          </Buttons>
        </form>
      </Container>
      {/* HACK: 모달 제작 후 오류 메세지 표시 예정 */}
    </>
  );
};

export default Login;

const Container = styled.div`
  max-width: 524px;

  margin: 175px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 65px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 11px;

  text-align: center;
`;

const Title = styled.h1`
  color: #1a2849;
  font-size: 44.374px;
  font-weight: 900;
  line-height: 51.769px;
`;

const Inputs = styled.div<{ $isInvalid: boolean }>`
  margin-bottom: ${props => (props.$isInvalid ? '10px' : '65px')};

  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const Input = styled.input`
  width: 524px;

  border-radius: 16px;
  border: 2px solid #757676;
  padding: 23px 20px;

  display: flex;
  align-items: center;

  color: #1a2849;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ::placeholder {
    color: #979c9e;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
  }

  :focus {
    outline: none;
    border: 5px solid #1a2849;
  }
`;

const ValidationText = styled.p`
  padding-left: 12px;

  color: #da1e28;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

const ValidationBoldText = styled.span`
  font-weight: 700;
`;

const Buttons = styled.div<{ $isInvalid: boolean }>`
  margin-top: ${props => (props.$isInvalid ? '23px' : 0)};

  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const LoginButton = styled.button<{ $type: string }>`
  min-width: 524px;

  border: none;
  border-radius: 16px;
  padding: 23px 0;

  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;

  background: ${props =>
    props.$type === 'login'
      ? '#1A2849'
      : 'linear-gradient(91deg, #FF3478 1.39%, #FF83AD 98.63%)'};

  :hover {
    cursor: pointer;
  }
`;

const SignUpButton = styled(LoginButton)<{ $type: string }>``;
