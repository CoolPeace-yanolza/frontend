import React, { useState } from 'react';
import styled from '@emotion/styled';

import { toRem } from '@utils/index';
import logo from '@assets/icons/ic-logo.svg';
import { Footer } from '@components/common';

const SignUp = () => {
  // TODO: react-hook-form 사용해서 유효성 검사 예정
  const [isInvalid, setIsInvalid] = useState(true);
  const [isEmailValidationVisible, setIsEmailValidationVisible] =
    useState(true);

  // 버튼 disabled 처리하기 위한 state
  // TODO: 변수명이 길어서 가독성이 떨어지는 것같아 더 좋은 이름이 있다면 추천 부탁드려요
  const [isEmailValidationButtonDisabled, setIsEmailValidationButtonDisabled] =
    useState(true);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  return (
    <>
      <LogoIcon
        src={logo}
        alt="사장님 비서ya"
      />
      <Container>
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
          <Divider />
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
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;

const SubmitButton = styled.button<{ $isDisabled: boolean }>`
  min-width: ${toRem(524)};
  height: ${toRem(78)};

  border: none;
  border-radius: ${toRem(16)};
  padding: ${toRem(23)} auto;

  color: #fff;
  font-size: ${toRem(22)};
  font-weight: 700;
  line-height: ${toRem(32)};

  background: ${props => (props.$isDisabled ? '#C1C1C1' : '#1A2849')};

  :hover {
    cursor: pointer;
  }
`;

const LogoIcon = styled.img`
  width: ${toRem(172.8)};
  height: ${toRem(36)};

  margin-top: ${toRem(48)};
  margin-left: ${toRem(57)};
`;

const Container = styled.div`
  max-width: ${toRem(524)};

  display: flex;
  flex-direction: column;

  margin: ${toRem(67)} auto ${toRem(141)};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: #202325;
  font-size: ${toRem(26)};
  font-weight: 700;
  line-height: ${toRem(31)};
  letter-spacing: ${toRem(-0.78)};
`;

const Description = styled.p`
  color: #979c9e;
  font-size: ${toRem(18)};
  font-weight: 500;
  line-height: ${toRem(32)};
`;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: ${toRem(26)};

  div:nth-child(1) {
    margin-bottom: ${toRem(16)};
  }
  hr:nth-child(2) {
    margin-bottom: ${toRem(7)};
  }
  div:nth-child(3) {
    margin-bottom: ${toRem(47)};
  }
  div:nth-child(4) {
    margin-bottom: ${toRem(8)};
  }
  div:nth-child(5) {
    margin-bottom: ${toRem(30)};
  }
`;

const Divider = styled.hr`
  width: ${toRem(525)};

  margin: 0;
  border: ${toRem(0.25)} solid #c7c7c7;
`;

const Label = styled.label`
  margin-bottom: ${toRem(10)};

  color: #757676;
  font-size: ${toRem(18)};
  font-weight: 700;
  line-height: ${toRem(32)};
`;

const Input = styled.input`
  width: ${toRem(524)};
  height: ${toRem(79)};

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

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmailInput = styled(Input)`
  width: ${toRem(358)};
`;

const EmailValidationButton = styled(SubmitButton)`
  min-width: ${toRem(152)};
`;

const ValidationText = styled.p<{ $isInvalid: boolean }>`
  margin-top: ${toRem(2)};
  margin-left: ${toRem(12)};

  color: ${props => (props.$isInvalid ? '#DA1E28' : '#1a2849')};
  font-size: ${toRem(15)};
  font-weight: 700;
  line-height: ${toRem(32)};
`;
