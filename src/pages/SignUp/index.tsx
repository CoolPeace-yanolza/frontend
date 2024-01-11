import React, { useState } from 'react';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import { Footer } from '@components/common';

const SignUp = () => {
  // TODO: react-hook-form 사용해서 유효성 검사 예정
  const [isInvalid, setIsInvalid] = useState(false);
  const [isEmailValidationVisible, setIsEmailValidationVisible] =
    useState(false);

  // 버튼 disabled 처리하기 위한 state
  // TODO: 변수명이 길어서 가독성이 떨어지는 것같아 더 좋은 이름이 있다면 추천 부탁드려요
  const [isEmailValidationButtonDisabled, setIsEmailValidationButtonDisabled] =
    useState(true);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  return (
    <WhiteBackground>
      <WithoutFooterSection>
        <Logo>
          <LogoIcon
            src={logo}
            alt="사장님 비서ya"
          />
        </Logo>
        <Container>
          <Content>
            <TitleWrapper>
              <Title>회원가입</Title>
              <Description>
                야놀자가 준비한 사장님 비서ya만의 혜택을 받아보세요.
              </Description>
            </TitleWrapper>
            <Form>
              <InputLabelWrapper>
                <Label htmlFor="user_name">이름</Label>
                <Input
                  type="text"
                  id="user_name"
                  placeholder="이름 입력"
                  required
                />
                {isInvalid && (
                  <ValidationText $isInvalid={isInvalid}>
                    이름을 입력해 주세요.
                  </ValidationText>
                )}
              </InputLabelWrapper>
              <InputLabelWrapper>
                <Label htmlFor="user_email">이메일</Label>
                <EmailInputWrapper>
                  <EmailInput
                    type="email"
                    id="user_email"
                    placeholder="이메일 입력"
                    required
                  />
                  <EmailValidationButton
                    $isDisabled={isEmailValidationButtonDisabled}
                  >
                    중복확인
                  </EmailValidationButton>
                </EmailInputWrapper>
                {isEmailValidationVisible && (
                  <ValidationText $isInvalid={!isInvalid}>
                    사용 가능한 아이디입니다.
                  </ValidationText>
                )}
              </InputLabelWrapper>
              <InputLabelWrapper>
                <Label htmlFor="user_password">비밀번호</Label>
                <Input
                  type="password"
                  id="user_password"
                  placeholder="8-20자, 영문/숫자/특수문자 조합"
                  required
                />
                {isInvalid && (
                  <ValidationText $isInvalid={isInvalid}>
                    비밀번호 형식이 아닙니다.
                  </ValidationText>
                )}
              </InputLabelWrapper>
              <InputLabelWrapper>
                <Label htmlFor="user_password_confirm">비밀번호 확인</Label>
                <Input
                  type="password"
                  id="user_password_confirm"
                  placeholder="다시 한번 입력해주세요."
                  required
                />
                {isInvalid && (
                  <ValidationText $isInvalid={isInvalid}>
                    비밀번호가 일치하지 않습니다.
                  </ValidationText>
                )}
              </InputLabelWrapper>
              <SubmitButton $isDisabled={isSubmitButtonDisabled}>
                회원가입
              </SubmitButton>
            </Form>
          </Content>
        </Container>
      </WithoutFooterSection>
      <Footer />
    </WhiteBackground>
  );
};

export default SignUp;

const SubmitButton = styled.button<{ $isDisabled: boolean }>`
  min-width: 524px;
  height: 78px;

  border: none;
  border-radius: 16px;
  padding: 23px auto;

  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;

  background: ${props => (props.$isDisabled ? '#C1C1C1' : '#1A2849')};

  :hover {
    cursor: pointer;
  }
`;

const WhiteBackground = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  background-color: #fff;
`;

const WithoutFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 67px;
`;

const Logo = styled.div`
  height: 36px;

  margin-top: 48px;
  margin-left: 57px;
`;

const LogoIcon = styled.img`
  width: 172.8px;
  height: 100%;
`;

const Container = styled.div`
  max-width: 524px;
  height: calc(100% - 36px - 100px);

  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: #202325;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.78px;
`;

const Description = styled.p`
  color: #979c9e;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
`;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const Label = styled.label`
  margin-bottom: 10px;

  color: #757676;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
`;

const Input = styled.input`
  width: 524px;
  height: 79px;

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
    outline: 2px solid #1a2849;
    border-color: #1a2849;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmailInput = styled(Input)`
  width: 358px;
`;

const EmailValidationButton = styled(SubmitButton)`
  min-width: 152px;
`;

const ValidationText = styled.p<{ $isInvalid: boolean }>`
  margin-top: 2px;
  margin-left: 12px;

  color: ${props => (props.$isInvalid ? '#DA1E28' : '#1a2849')};
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;
