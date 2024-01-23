import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

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
    formState: { errors, isValid }
  } = methods;
  const isError = !!errors?.user_id || !!errors?.user_password ? true : false;

  // HACK : 추후 react-hook-form으로 입력 데이터 관리 예정
  const formData: LoginData = {
    email: 'juhwanTest@gmail.com',
    password: 'juhwanTest'
  };

  const movetoSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/signup');
  };

  const handleLoginSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
  };

  return (
    <FormProvider {...methods}>
      <form>
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
            buttonFunc={handleLoginSubmit}
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
