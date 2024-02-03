import styled from '@emotion/styled';

import { AuthButton, AuthButtonStyleProps } from '@/types/auth';

const AuthButton = ({
  buttonType,
  size,
  variant,
  text,
  disabled,
  buttonFunc
}: AuthButton) => {
  return (
    <SubmitButton
      type={buttonType}
      $size={size}
      $variant={variant}
      onClick={buttonFunc}
      disabled={disabled}
    >
      {text}
    </SubmitButton>
  );
};

export default AuthButton;

const SubmitButton = styled.button<AuthButtonStyleProps>`
  width: ${props => (props.$size === 'small' ? '152px' : '524px')};
  height: 79px;

  border: none;
  border-radius: 16px;
  padding: 23px auto;

  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;

  background: ${props => {
    if (props.$variant === 'disabled') {
      return '#C1C1C1';
    } else if (props.$variant === 'pink') {
      return 'linear-gradient(91deg, #FF3478 1.39%, #FF83AD 98.63%)';
    } else if (props.$variant === 'skyblue') {
      return 'linear-gradient(89.18deg, #3182F6 0%, #6AB2FF 111.65%)';
    } else {
      return '#1A2849';
    }
  }};

  &:hover {
    cursor: ${props => {
      if (props.$variant === 'disabled') {
        return 'default';
      } else {
        return 'pointer';
      }
    }};
  }

  @media screen and (max-width: 649px) {
    width: ${props => (props.$size === 'small' ? '27%' : '100%')};
    height: 55px;

    font-size: 15px;
  }
`;
