import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputButtonProps } from '@/types/register';

const InputButton = ({
  type,
  id,
  name,
  value,
  isChecked,
  buttonName,
  onButtonChange
}: InputButtonProps) => {
  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onButtonChange) {
      onButtonChange(e);
    }
  };

  return (
    <>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        onChange={handleButtonChange}
      />
      <Button
        htmlFor={id}
        // onClick={handleToggle}
      >
        {buttonName}
      </Button>
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
`;
