import styled from '@emotion/styled';

const AuthButton = ({ size, variant, text, buttonFunc }: any) => {
  return (
    <SubmitButton
      $size={size}
      $variant={variant}
      onClick={buttonFunc}
    >
      {text}
    </SubmitButton>
  );
};

export default AuthButton;

const SubmitButton = styled.button<{ $size: string; $variant: string }>`
  width: ${props => (props.$size === 'small' ? '152px' : '524px')};
  height: 78px;

  border: none;
  border-radius: 16px;
  padding: 23px auto;

  color: #fff;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;

  background: ${props =>
    props.$variant === 'disabled' ? '#C1C1C1' : '#1A2849'};

  &:hover {
    cursor: pointer;
  }
`;
