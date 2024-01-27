import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues
} from 'react-hook-form';

import { InputValidation, LoginFormProps } from '@/types/login';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/Auth';
import { LoginData } from '@/types/auth';
import { postLogin } from 'src/api';
import { setCookies } from '@utils/lib/cookies';

const LoginForm = ({ handleModalOpen }: LoginFormProps) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const methods = useForm({ mode: 'onBlur' });
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

    const response = await postLogin(formData);

    if (response?.status === 200) {
      setCookies('userName', response.data.name, response.data.expires_in);
      setCookies('userEmail', response.data.email, response.data.expires_in);
      setCookies(
        'accessToken',
        response.data.access_token,
        response.data.expires_in
      );
      setCookies(
        'refreshToken',
        response.data.refresh_token,
        response.data.expires_in
      );

      if (state) {
        navigate(state.from);
      } else {
        navigate('/');
      }
    } else if (response?.status === 404) {
      handleModalOpen(response?.data.message);
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

  @media screen and (max-width: 649px) {
    gap: 11px;
  }
`;

const ValidationText = styled.p`
  padding-left: 12px;

  color: #da1e28;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;

  @media screen and (max-width: 649px) {
    padding-left: 10px;

    font-size: 13px;
  }
`;

const Buttons = styled.div<InputValidation>`
  display: flex;
  flex-direction: column;
  gap: 13px;

  margin-top: ${props => (props.$isValid ? 0 : '23px')};

  @media screen and (max-width: 649px) {
    gap: 11px;
  }
`;
