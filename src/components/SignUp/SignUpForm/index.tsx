import { useState } from 'react';
import styled from '@emotion/styled';

import { SignUpInputValidation } from '@/types/signUp';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/common/Auth';

const SignUpForm = () => {
  const [showPW, setShowPW] = useState(false);
  const [showPWConfirm, setShowPWConfirm] = useState(false);

  // TODO: react-hook-form 사용해서 유효성 검사 예정
  const isInvalid = true;
  const isEmailValidationVisible = false;

  return (
    <Form>
      <InputLabelWrapper>
        <Label htmlFor="user_name">이름</Label>
        <AuthInputNormal
          type="text"
          id="user_name"
          placeholder="이름 입력"
          usedFor="signup"
          isInvalid={isInvalid}
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
          />
          <AuthButton
            size="small"
            variant="disabled"
            text="회원가입"
            buttonFunc={() => {
              // TODO : 회원가입 API 요청 로직
            }}
          />
        </EmailInputWrapper>
        {isEmailValidationVisible && (
          <ValidationText $isInvalid={!isInvalid}>
            사용 가능한 아이디입니다.
          </ValidationText>
        )}
      </InputLabelWrapper>
      <InputLabelWrapper>
        <Label htmlFor="user_password">비밀번호</Label>
        <AuthInputPassword
          type={showPW ? 'text' : 'password'}
          id="user_password"
          placeholder="8-20자, 영문/숫자/특수문자 조합"
          usedFor="signup"
          showPW={showPW}
          setShowPW={setShowPW}
          isInvalid={isInvalid}
        />
        {isInvalid && (
          <ValidationText $isInvalid={isInvalid}>
            비밀번호 형식이 아닙니다.
          </ValidationText>
        )}
      </InputLabelWrapper>
      <InputLabelWrapper>
        <Label htmlFor="user_password_confirm">비밀번호 확인</Label>
        <AuthInputPassword
          type={showPWConfirm ? 'text' : 'password'}
          id="user_password_confirm"
          placeholder="다시 한번 입력해주세요."
          usedFor="signup"
          showPW={showPWConfirm}
          setShowPW={setShowPWConfirm}
          isInvalid={isInvalid}
        />
        {isInvalid && (
          <ValidationText $isInvalid={isInvalid}>
            비밀번호가 일치하지 않습니다.
          </ValidationText>
        )}
      </InputLabelWrapper>
      <AuthButton
        size="large"
        variant="navy"
        text="회원가입"
        buttonFunc={() => {}}
      />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  &::placeholder {
    color: #979c9e;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
  }

  &:focus {
    outline: 2px solid #1a2849;
    border-color: #1a2849;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmailInput = styled(Input)`
  width: 358px;
`;

const ValidationText = styled.p<SignUpInputValidation>`
  margin-top: 2px;
  margin-left: 12px;

  color: ${props => (props.$isInvalid ? '#DA1E28' : '#1a2849')};
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;
