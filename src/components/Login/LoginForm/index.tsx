import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { InputValidation } from '@/types/login';
import {
  AuthButton,
  AuthInputNormal,
  AuthInputPassword
} from '@components/common/Auth';
import { LoginData } from '@/types/auth';
import { postLogin } from 'src/api';
import { setCookies } from '@utils/lib/cookies';

const LoginForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // HACK : 추후 useState로 입력 데이터 관리할 예쩡
  const formData: LoginData = {
    email: 'juhwanTest@gmail.com',
    password: 'juhwanTest'
  };

  // HACK: 유효성 검사 기능 구현 후 유효성 메세지 노출 여부 결정
  const isInvalid = true;

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
    <form>
      <Inputs $isInvalid={isInvalid}>
        <AuthInputNormal
          type="email"
          id="user_email"
          placeholder="이메일 입력"
          usedFor="login"
          isInvalid={isInvalid}
        />
        <AuthInputPassword
          id="user_password"
          placeholder="8-20자, 영문/숫자/특수문자 조합"
          usedFor="login"
          isInvalid={isInvalid}
        />
      </Inputs>
      {isInvalid && (
        <ValidationText>
          <ValidationBoldText>아이디</ValidationBoldText>를 입력해 주세요
        </ValidationText>
      )}
      <Buttons $isInvalid={isInvalid}>
        <AuthButton
          size="large"
          variant="navy"
          text="로그인"
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
  );
};

export default LoginForm;

const Inputs = styled.div<InputValidation>`
  margin-bottom: ${props => (props.$isInvalid ? '10px' : '65px')};

  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ValidationText = styled.p`
  padding-left: 12px;

  color: #da1e28;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

const ValidationBoldText = styled.span`
  font-weight: 700;
`;

const Buttons = styled.div<InputValidation>`
  display: flex;
  flex-direction: column;
  gap: 13px;

  ${props => props.$isInvalid && 'margin-top: 23px'};
`;
