import styled from '@emotion/styled';

import theme from '@styles/theme';
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
  color: ${theme.colors.hover};
  font-size: 17px;
  font-weight: 600;
`;
