import styled from '@emotion/styled';

import { InputWrapperProps, WrapperStyleProps } from '@/types/register';

const InputWrapper = ({
  whichInput,
  currentInput,
  isOpen,
  children
}: InputWrapperProps) => {
  if (isOpen) return;

  return (
    <Wrapper $isSelected={whichInput === currentInput}>{children}</Wrapper>
  );
};

export default InputWrapper;

const Wrapper = styled.div<WrapperStyleProps>`
  width: 100%;

  margin-top: 9px;

  display: ${props => (props.$isSelected ? 'inline-block' : 'none')};
`;
