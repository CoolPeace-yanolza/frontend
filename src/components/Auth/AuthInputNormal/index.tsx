import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import { AuthInputNormal, AuthInputStyleProps } from '@/types/auth';
import closeIcon from '@assets/icons/ic-login-close.svg';
import checkInvalid from '@assets/icons/ic-signup-check-invalid.svg';
import checkValid from '@assets/icons/ic-signup-check-valid.svg';
import { getInputOptions } from '@utils/index';

const AuthInputNormal = ({
  type,
  id,
  placeholder,
  usedFor,
  isError
}: AuthInputNormal) => {
  const { register, watch, resetField, getFieldState, formState } =
    useFormContext();
  const inputValue = watch(id);
  const handleReset = () => resetField(id);

  const isInputTouched = getFieldState(id, formState).isTouched;
  const isValid = isInputTouched ? !isError : false;

  return (
    <Container
      $usedFor={usedFor}
      $type={type}
    >
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        $usedFor={usedFor}
        $type={type}
        {...register(id, getInputOptions(id))}
      />
      <Buttons>
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
        {usedFor === 'signup' && type !== 'email' && (
          <Icon src={isValid ? checkValid : checkInvalid} />
        )}
      </Buttons>
    </Container>
  );
};

export default AuthInputNormal;

const Container = styled.div<AuthInputStyleProps>`
  position: relative;

  width: ${props =>
    props.$usedFor === 'signup' && props.$type === 'email' ? '358px' : '524px'};
  height: 79px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 649px) {
    width: ${props =>
      props.$usedFor === 'signup' && props.$type === 'email'
        ? '219px'
        : '100%'};
    height: 55px;
  }
`;

const Input = styled.input<AuthInputStyleProps>`
  width: 100%;
  height: 100%;

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

  @media screen and (max-width: 649px) {
    right: 10px;
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
