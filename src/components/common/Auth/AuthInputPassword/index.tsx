import { useState } from 'react';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import { AuthInput } from '@/types/auth';
import eyeOn from '@assets/icons/ic-login-eye-on.svg';
import eyeOff from '@assets/icons/ic-login-eye-off.svg';
import closeIcon from '@assets/icons/ic-login-close.svg';
import checkInvalid from '@assets/icons/ic-signup-check-invalid.svg';
import checkValid from '@assets/icons/ic-signup-check-valid.svg';
import { fieldOptions } from '@utils/lib/auth';

const AuthInputPassword = ({
  id,
  placeholder,
  usedFor,
  isInvalid
}: AuthInput) => {
  const { register, watch, resetField } = useFormContext();
  const inputValue = watch(id);
  const handleReset = () => resetField(id);

  const [showPW, setShowPW] = useState(false);

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
        {...register(id, fieldOptions(id))}
      />
      <Buttons>
        {!!inputValue && (
          <Button onClick={handleShowPW}>
            <Icon
              src={showPW ? eyeOn : eyeOff}
              alt={showPW ? '비밀번호 보기 버튼' : '비밀번호 숨김 버튼'}
            />
          </Button>
        )}
        {usedFor === 'login' && !!inputValue && (
          <Button onClick={handleReset}>
            <Icon
              src={closeIcon}
              alt="지우기 버튼"
            />
          </Button>
        )}
        {usedFor === 'signup' && (
          <Icon src={isInvalid ? checkInvalid : checkValid} />
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
`;

const Buttons = styled.div`
  position: absolute;
  right: 22px;

  display: flex;
  gap: 17px;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;

  padding: 0;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
