import styled from '@emotion/styled';
import theme from '@styles/theme';

import { InputButtonProps } from '@/types/register';

const InputButton = ({ type, id, name, buttonName }: InputButtonProps) => {
  return (
    <>
      <Input
        id={id}
        type={type}
        name={name}
      />
      <Button htmlFor={id}>{buttonName}</Button>
    </>
  );
};

export default InputButton;

const Input = styled.input`
  display: none;

  &:checked + label {
    border: none;

    color: #fff;

    background-color: ${theme.colors.hover};
  }

  &:checked + label + div {
    display: block;
  }
`;

const Button = styled.label`
  width: 111px;
  height: 40px;

  border: 1px solid #979c9e;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #979c9e;
  font-size: 15px;

  cursor: pointer;

  &:has(input:checked) {
    background-color: ${theme.colors.hover};
  }
`;
