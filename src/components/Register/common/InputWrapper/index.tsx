import styled from '@emotion/styled';

import { InputWrapperProps } from '@/types/register';

const InputWrapper = ({
  state,
  currentState,
  isSelected,
  children
}: InputWrapperProps) => {
  if ((state && currentState && state === currentState) || isSelected) {
    return <Wrapper>{children}</Wrapper>;
  }
};

export default InputWrapper;

const Wrapper = styled.div`
  width: 100%;

  margin-top: 9px;
`;
