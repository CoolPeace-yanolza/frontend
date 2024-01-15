import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { ButtonText, InputValidation } from '@/types/login';
import { InputNormal, InputPassword } from '@components/common/Inputs';

const LoginForm = () => {
  const navigate = useNavigate();
  // HACK: 유효성 검사 기능 구현 후 유효성 메세지 노출 여부 결정
  const isInvalid = true;
  const [showPW, setShowPW] = useState(false);

  const movetoSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/signup');
  };
  return (
    <form>
      <Inputs $isInvalid={isInvalid}>
        <InputNormal
          type="email"
          id="user_email"
          placeholder="이메일 입력"
          usedFor="login"
          isInvalid={isInvalid}
        />
        <InputPassword
          type={showPW ? 'text' : 'password'}
          id="user_password"
          placeholder="8-20자, 영문/숫자/특수문자 조합"
          usedFor="login"
          showPW={showPW}
          setShowPW={setShowPW}
          isInvalid={isInvalid}
        />
      </Inputs>
      {isInvalid && (
        <ValidationText>
          <ValidationBoldText>아이디</ValidationBoldText>를 입력해 주세요
        </ValidationText>
      )}
      <Buttons $isInvalid={isInvalid}>
        <Button $text="login">로그인</Button>
        <Button
          $text="signUp"
          onClick={movetoSignUp}
        >
          회원가입
        </Button>
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

const Button = styled.button<ButtonText>`
  min-width: 524px;

  border: none;
  border-radius: 16px;
  padding: 23px 0;

  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;

  background: ${props =>
    props.$text === 'login'
      ? '#1A2849'
      : 'linear-gradient(91deg, #FF3478 1.39%, #FF83AD 98.63%)'};

  &:hover {
    cursor: pointer;
  }
`;
