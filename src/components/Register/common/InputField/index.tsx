import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputFieldProps, InputFieldStyleProps } from '@/types/register';

const InputField = ({
  placeholder,
  defaultValue,
  text,
  onInputChange
}: InputFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...(text !== '원' && { maxLength: 2 })}
        $text={text}
        onChange={handleInputChange}
      />
      <Text $text={text}>{text}</Text>
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  position: relative;

  width: 245px;

  margin-right: 10px;

  ${theme.response.tablet} {
    width: 29vw;
  }

  @media (max-width: 550px) {
    width: 156px;
  }
`;

const Input = styled.input<InputFieldStyleProps>`
  width: 100%;
  height: 39px;

  padding: 0 ${props => (props.$text === '원' ? '28px' : '61px')};
  border-radius: 5px;
  border: 1px solid ${theme.colors.hover};
  outline: none;

  font-size: 15px;
  text-align: right;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${theme.response.tablet} {
    height: 5vw;

    padding: 0 ${props => (props.$text === '원' ? '4.2vw' : '7.7vw')};

    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    height: 26px;

    padding: 0 ${props => (props.$text === '원' ? '23px' : '42px')};

    font-size: 9px;
  }
`;

const Text = styled.span<InputFieldStyleProps>`
  position: absolute;
  top: 10px;
  left: ${props => (props.$text === '원' ? '219px' : '186px')};

  ${theme.response.tablet} {
    top: 1.45vw;
    left: ${props => (props.$text === '원' ? '25vw' : '21.5vw')};

    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    top: 8px;
    left: ${props => (props.$text === '원' ? '134px' : '115px')};

    font-size: 9px;
  }
`;
