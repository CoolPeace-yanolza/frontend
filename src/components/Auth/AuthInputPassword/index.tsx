import { useState } from 'react';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import eyeOn from '@assets/icons/ic-login-eye-on.svg';
import eyeOff from '@assets/icons/ic-login-eye-off.svg';
import closeIcon from '@assets/icons/ic-login-close.svg';
import checkInvalid from '@assets/icons/ic-signup-check-invalid.svg';
import checkValid from '@assets/icons/ic-signup-check-valid.svg';
import { AuthInput } from '@/types/auth';
import { getInputOptions, hasWhiteSpace } from '@utils/index';

const AuthInputPassword = ({
  id,
  placeholder,
  usedFor,
  isError
}: AuthInput) => {
  const { register, watch, resetField } = useFormContext();

  const inputValue: string = watch(id);
  const passwordValue: string = watch('user_password');
  const isValid = !!inputValue ? !isError && !hasWhiteSpace(inputValue) : false;

  const [showPW, setShowPW] = useState(false);

  const handleReset = () => resetField(id);

  const handleShowPW = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPW(prev => !prev);
  };

  return (
    <Container>
      <Input
        type={showPW ? 'text' : 'password'}
        id={id}
        placeholder={placeholder}
        {...register(id, getInputOptions(id, passwordValue))}
      />
      <Buttons>
        {!!inputValue && (
          <Button
            type="button"
            onClick={handleShowPW}
          >
            <Icon
              src={showPW ? eyeOn : eyeOff}
              alt={showPW ? '비밀번호 보기 버튼' : '비밀번호 숨김 버튼'}
            />
          </Button>
        )}
        {usedFor === 'login' && !!inputValue && (
          <Button
            type="button"
            onClick={handleReset}
          >
            <Icon
              src={closeIcon}
              alt="지우기 버튼"
            />
          </Button>
        )}
        {usedFor === 'signup' && (
          <Icon src={isValid ? checkValid : checkInvalid} />
        )}
      </Buttons>
    </Container>
  );
};

export default AuthInputPassword;

const Container = styled.div`
  position: relative;

  width: 524px;
  height: 79px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 649px) {
    width: 100%;
    height: 55px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 16px;
  border: 2px solid #757676;
  padding: 23px 87px 23px 20px;

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

  @media screen and (max-width: 649px) {
    padding: 23px 15px;

    font-size: 14px;

    &::placeholder {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const Buttons = styled.div`
  position: absolute;
  right: 22px;

  display: flex;
  gap: 17px;

  @media screen and (max-width: 649px) {
    right: 10px;

    gap: 8px;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;

  padding: 0;
  border: none;

  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 649px) {
    width: 20px;
    height: 20px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 649px) {
    width: 20px;
    height: 20px;
  }
`;
