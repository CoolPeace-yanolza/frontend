import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

import { SignUpInputValidation } from '@/types/signUp';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/common/Auth';

const SignUpForm = () => {
  const methods = useForm({
    mode: 'all'
  });
  const {
    formState: { errors }
  } = methods;

  const isInvalid = true;
  const isEmailValidationVisible = false;

  return (
    <FormProvider {...methods}>
      <Form>
        <InputLabelWrapper>
          <Label htmlFor="user_name">이름</Label>
          <AuthInputNormal
            type="text"
            id="user_name"
            placeholder="이름 입력"
            usedFor="signup"
            isError={!!errors?.user_name}
          />
          {errors.user_name && (
            <ValidationText>
              {errors?.user_name?.message?.toString()}
            </ValidationText>
          )}
        </InputLabelWrapper>
        <InputLabelWrapper>
          <Label htmlFor="user_email">이메일</Label>
          <EmailInputWrapper>
            <AuthInputNormal
              type="email"
              id="user_email"
              placeholder="이메일 입력"
              usedFor="signup"
              isError={!!errors?.user_email}
            />
            <AuthButton
              size="small"
              variant="disabled"
              text="중복확인"
              buttonFunc={() => {
                // TODO : 이메일 중복확인 API 요청 로직
              }}
            />
          </EmailInputWrapper>
          {errors.user_email && (
            <ValidationText>
              {errors?.user_email?.message?.toString()}
            </ValidationText>
          )}
          {!errors.user_email && isEmailValidationVisible && (
            <ValidationText $isValid={!isInvalid}>
              백엔드 응답에 따라 나타날 유효성 메세지
            </ValidationText>
          )}
        </InputLabelWrapper>
        <InputLabelWrapper>
          <Label htmlFor="user_password">비밀번호</Label>
          <AuthInputPassword
            id="user_password"
            placeholder="8-20자, 영문/숫자/특수문자 조합"
            usedFor="signup"
            isError={!!errors?.user_password}
          />
          {errors.user_password && (
            <ValidationText>
              {errors?.user_password?.message?.toString()}
            </ValidationText>
          )}
        </InputLabelWrapper>
        <InputLabelWrapper>
          <Label htmlFor="user_password_confirm">비밀번호 확인</Label>
          <AuthInputPassword
            id="user_password_confirm"
            placeholder="다시 한번 입력해주세요."
            usedFor="signup"
            isError={!!errors?.user_password_confirm}
          />
          {errors.user_password_confirm && (
            <ValidationText>
              {errors?.user_password_confirm?.message?.toString()}
            </ValidationText>
          )}
        </InputLabelWrapper>
        <AuthButton
          size="large"
          variant="navy"
          text="회원가입"
          buttonFunc={() => {
            // TODO : 회원가입 API 요청 로직
          }}
        />
      </Form>
    </FormProvider>
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

const EmailInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ValidationText = styled.p<SignUpInputValidation>`
  margin-top: 2px;
  margin-left: 12px;

  color: ${props => (props.$isValid ? '#1a2849' : '#DA1E28')};
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;
