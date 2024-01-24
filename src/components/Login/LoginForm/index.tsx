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
  const isError = !!errors?.login_id || !!errors?.login_password ? true : false;

  const movetoSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/signup');
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const formData: LoginData = {
      email: data.login_id,
      password: data.login_password
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
            id="login_id"
            placeholder="이메일 입력"
            usedFor="login"
            isError={!!errors?.login_id}
          />
          <AuthInputPassword
            id="login_password"
            placeholder="비밀번호 입력"
            usedFor="login"
            isError={!!errors?.login_password}
          />
        </Inputs>
        {errors.login_id && (
          <ValidationText>
            {errors?.login_id?.message?.toString()}
          </ValidationText>
        )}
        {!errors.login_id && errors.login_password && (
          <ValidationText>
            {errors?.login_password?.message?.toString()}
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
