import React, { useState } from 'react';
import styled from '@emotion/styled';

import { toRem } from '@utils/index';

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
  max-width: ${toRem(524)};

  margin: ${toRem(175)} auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(65)};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(11)};

  text-align: center;
`;

const Title = styled.h1`
  color: #1a2849;
  font-size: ${toRem(44.374)};
  font-weight: 900;
  line-height: ${toRem(51.769)};
`;

const Inputs = styled.div<{ $isInvalid: boolean }>`
  margin-bottom: ${props =>
    props.$isInvalid ? '${toRem(10)}' : '${toRem(65)}'};

  display: flex;
  flex-direction: column;
  gap: ${toRem(19)};
`;

const Input = styled.input`
  width: ${toRem(524)};

  border-radius: ${toRem(16)};
  border: ${toRem(2)} solid #757676;
  padding: ${toRem(23)} ${toRem(20)};

  display: flex;
  align-items: center;

  color: #1a2849;
  font-size: ${toRem(18)};
  font-weight: 500;
  line-height: ${toRem(32)};

  ::placeholder {
    color: #979c9e;
    font-size: ${toRem(18)};
    font-weight: 500;
    line-height: ${toRem(32)};
  }

  :focus {
    outline: none;
    border: ${toRem(5)} solid #1a2849;
  }
`;

const ValidationText = styled.p`
  padding-left: ${toRem(12)};

  color: #da1e28;
  font-size: ${toRem(15)};
  font-weight: 500;
  line-height: ${toRem(32)};
`;

const ValidationBoldText = styled.span`
  font-weight: 700;
`;

const Buttons = styled.div<{ $isInvalid: boolean }>`
  margin-top: ${props => (props.$isInvalid ? '${toRem(23)}' : 0)};

  display: flex;
  flex-direction: column;
  gap: ${toRem(13)};
`;

const LoginButton = styled.button<{ $type: string }>`
  min-width: ${toRem(524)};

  border: none;
  border-radius: ${toRem(16)};
  padding: ${toRem(23)} 0;

  color: #fff;
  font-size: ${toRem(22)};
  font-weight: 700;
  line-height: ${toRem(32)};

  background: ${props =>
    props.$type === 'login'
      ? '#1A2849'
      : 'linear-gradient(91deg, #FF3478 1.39%, #FF83AD 98.63%)'};

  :hover {
    cursor: pointer;
  }
`;

const SignUpButton = styled(LoginButton)<{ $type: string }>``;
