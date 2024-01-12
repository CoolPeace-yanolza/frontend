import styled from '@emotion/styled';

import { InputContainerProps } from '@/types/register';

const InputContainer = ({ description, children }: InputContainerProps) => {
  return (
    <Container>
      <Description>{description}</Description>
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
  margin-bottom: 30px;

  font-size: 18px;
`;
