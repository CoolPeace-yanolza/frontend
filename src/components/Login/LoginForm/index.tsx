import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import styled from '@emotion/styled';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues
} from 'react-hook-form';

import { InputValidation } from '@/types/login';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/Auth';
import { LoginData } from '@/types/auth';
import { postLogin } from 'src/api';
import { setCookies } from '@utils/lib/cookies';

const LoginForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const methods = useForm({
    mode: 'onBlur'
  });
  const {
    formState: { errors, isValid },
    handleSubmit
  } = methods;
  const isError = !!errors?.user_id || !!errors?.user_password ? true : false;

  const movetoSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/signup');
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const formData: LoginData = {
      email: data.user_id,
      password: data.user_password
    };
    try {
      const response = await postLogin(formData);
      setCookies('userName', response.name, response.expires_in);
      setCookies('userEmail', response.email, response.expires_in);
      setCookies('accessToken', response.access_token, response.expires_in);
      setCookies('refreshToken', response.refresh_token, response.expires_in);

      if (state) {
        navigate(state);
      } else {
        navigate('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        // TODO : 에러코드에 따라 모달 표시 예정
        // error.response?.data.code;
        // error.response?.data.message;
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs $isValid={!isError}>
          <AuthInputNormal
            type="email"
            id="user_id"
            placeholder="이메일 입력"
            usedFor="login"
            isError={!!errors?.user_id}
          />
          <AuthInputPassword
            id="user_password"
            placeholder="비밀번호 입력"
            usedFor="login"
            isError={!!errors?.user_password}
          />
        </Inputs>
        {errors.user_id && (
          <ValidationText>
            {errors?.user_id?.message?.toString()}
          </ValidationText>
        )}
        {!errors.user_id && errors.user_password && (
          <ValidationText>
            {errors?.user_password?.message?.toString()}
          </ValidationText>
        )}
        <Buttons $isValid={!isError}>
          <AuthButton
            size="large"
            variant="navy"
            text="로그인"
            disabled={!isValid}
            buttonFunc={handleSubmit(onSubmit)}
          />
          <AuthButton
            size="large"
            variant="pink"
            text="회원가입"
            buttonFunc={movetoSignUp}
          />
        </Buttons>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

const Inputs = styled.div<InputValidation>`
  margin-bottom: ${props => (props.$isValid ? '65px' : '10px')};

  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ValidationText = styled.p`
  padding-left: 12px;

  color: #da1e28;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;

const Buttons = styled.div<InputValidation>`
  display: flex;
  flex-direction: column;
  gap: 13px;

  margin-top: ${props => (props.$isValid ? 0 : '23px')};
`;
