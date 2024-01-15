import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

import { InputPassword } from '@/types/common';
import eyeOn from '@assets/icons/ic-login-eye-on.svg';
import eyeOff from '@assets/icons/ic-login-eye-off.svg';
import closeIcon from '@assets/icons/ic-login-close.svg';
import checkInvalid from '@assets/icons/ic-signup-check-invalid.svg';
import checkValid from '@assets/icons/ic-signup-check-valid.svg';

const InputPassword = ({
  type,
  placeholder,
  usedFor,
  showPW,
  setShowPW,
  isInvalid
}: InputPassword) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText('');
  };

  const handleShowPW = () => {
    setShowPW(prev => !prev);
    // setShowPW(!showPW);
    console.log('비번 보여라');
  };

  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      {text.length > 0 && (
        <Buttons>
          <Button onClick={handleShowPW}>
            {showPW ? (
              <Icon
                src={eyeOn}
                alt="비밀번호 보기 버튼"
              />
            ) : (
              <Icon
                src={eyeOff}
                alt="비밀번호 숨김 버튼"
              />
            )}
          </Button>
          {usedFor === 'login' ? (
            <Button onClick={handleReset}>
              <Icon
                src={closeIcon}
                alt="지우기 버튼"
              />
            </Button>
          ) : isInvalid ? (
            <Icon src={checkInvalid} />
          ) : (
            <Icon src={checkValid} />
          )}
        </Buttons>
      )}
    </Container>
  );
};

export default InputPassword;

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
