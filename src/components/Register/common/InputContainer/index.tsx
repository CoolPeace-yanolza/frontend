import styled from '@emotion/styled';

import { InputContainerProps } from '@/types/register';

const InputContainer = ({ title, children }: InputContainerProps) => {
  return (
    <Container>
      <Description>{title}</Description>
      {children}
    </Container>
  );
};

export default InputContainer;

const Container = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding: 24px;
  border: 1px solid #cdcfd0;
  border-radius: 16px;

  display: inline-block;
`;

const Description = styled.div`
  font-size: 18px;
`;