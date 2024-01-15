import styled from '@emotion/styled';
import theme from '@styles/theme';

import {
  InputFieldProps,
  InputFieldStyleProps,
  InputFieldContainerStyleProps
} from '@/types/register';

const InputField = ({
  placeholder,
  text,
  whichInput,
  currentInput,
  onInputChange
}: InputFieldProps) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(e);
  };

  return (
    <Container $isSelected={whichInput === currentInput}>
      <Input
        placeholder={placeholder}
        {...(text !== '원' && { maxLength: 2 })}
        $text={text}
        onInput={handleInput}
      />
      <Text $text={text}>{text}</Text>
    </Container>
  );
};

export default InputField;

const Container = styled.div<InputFieldContainerStyleProps>`
  position: relative;

  display: ${props => (props.$isSelected ? 'block' : 'none')};
`;

const Input = styled.input<InputFieldStyleProps>`
  width: 245px;
  height: 39px;

  padding: 0 ${props => (props.$text === '원' ? '28px' : '61px')};
  border-radius: 5px;
  border: 1px solid ${theme.colors.hover};
  outline: none;

  font-size: 15px;
  text-align: right;
`;

const Text = styled.span<InputFieldStyleProps>`
  position: absolute;
  top: 10px;
  left: ${props => (props.$text === '원' ? '219px' : '186px')};
`;
