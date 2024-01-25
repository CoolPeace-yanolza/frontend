import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import {
  SignUpData,
  SignUpFormProps,
  SignUpInputValidation
} from '@/types/signUp';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/Auth';
import { getEmailValid, postSignUp } from 'src/api';

const SignUpForm = ({ handleModalOpen }: SignUpFormProps) => {
  const methods = useForm({
    mode: 'all'
  });
  const { watch, getValues, getFieldState, formState, handleSubmit } = methods;
  const { errors, isValid } = formState;

  const emailValue: string = getValues('user_email');
  const isEmailTouched = getFieldState('user_email', formState).isTouched;
  const isEmailValueValid = isEmailTouched ? !errors?.user_email : false;

  const emailValidInitialValue = {
    message: '',
    type: ''
  };

  const [emailValidMessage, setEmailValidMessage] = useState(
    emailValidInitialValue
  );

  const checkEmailValid = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const response = await getEmailValid(emailValue);

    if (response?.status === 200) {
      setEmailValidMessage({
        message: '사용 가능한 아이디입니다.',
        type: 'success'
      });
    } else if (response?.status === 400) {
      setEmailValidMessage({
        message: '이미 사용 중인 아이디입니다.',
        type: 'failure'
      });
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const formData: SignUpData = {
      email: data.user_email,
      password: data.user_password,
      name: data.user_name
    };

    const response = await postSignUp(formData);

    if (response?.status === 201) {
      window.location.replace('/signup/complete');
    } else {
      handleModalOpen();
    }
  };

  useEffect(() => {
    setEmailValidMessage(emailValidInitialValue);
  }, [watch('user_email')]);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
              variant={isEmailValueValid ? 'navy' : 'disabled'}
              text="중복확인"
              disabled={!isEmailValueValid}
              buttonFunc={checkEmailValid}
            />
          </EmailInputWrapper>
          {/* 입력항목 자체 유효성 검사에 따라 나타날 유효성 메세지 */}
          {errors.user_email && (
            <ValidationText>
              {errors?.user_email?.message?.toString()}
            </ValidationText>
          )}
          {/* API 응답에 따라 나타날 유효성 메세지 */}
          {!errors.user_email && isEmailValueValid && !!emailValue && (
            <ValidationText $isValid={emailValidMessage.type === 'success'}>
              {emailValidMessage.message}
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
          variant={
            isValid && emailValidMessage.type === 'success'
              ? 'navy'
              : 'disabled'
          }
          text="회원가입"
          disabled={!isValid || emailValidMessage.type === 'failure'}
          buttonFunc={handleSubmit(onSubmit)}
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
