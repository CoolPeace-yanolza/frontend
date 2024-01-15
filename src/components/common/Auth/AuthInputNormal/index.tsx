import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

import { InputNormal } from '@/types/auth';
import closeIcon from '@assets/icons/ic-login-close.svg';
import checkInvalid from '@assets/icons/ic-signup-check-invalid.svg';
import checkValid from '@assets/icons/ic-signup-check-valid.svg';

const AuthInputNormal = ({
  type,
  id,
  placeholder,
  usedFor,
  isInvalid
}: InputNormal) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setText('');
  };

  // TODO : react-hook-form 적용 후 유효성 검사 로직 예정

  return (
    <Container>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      <Buttons>
        {usedFor === 'login' ? (
          text.length > 0 && (
            <Button onClick={handleReset}>
              <Icon
                src={closeIcon}
                alt="지우기 버튼"
              />
            </Button>
          )
        ) : isInvalid ? (
          <Icon src={checkInvalid} />
        ) : (
          <Icon src={checkValid} />
        )}
      </Buttons>
    </Container>
  );
};

export default AuthInputNormal;

const Container = styled.div`
  position: relative;

  width: 524px;
  height: 79px;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 524px;
  height: 79px;

  border-radius: 16px;
  border: 2px solid #757676;
  padding: 23px 20px;

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

  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;

  padding: 0;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
