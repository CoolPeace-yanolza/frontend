import styled from '@emotion/styled';

import theme from '@styles/theme';
import { RoomSelectButtonProps } from '@/types/register';

const RoomSelectButton = ({
  type,
  id,
  name,
  value,
  isChecked,
  buttonName,
  setIsOpen,
  onButtonChange
}: RoomSelectButtonProps) => {
  const handleModal = () => {
    setIsOpen(true);
  };

  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onButtonChange(e);
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
        onClick={handleModal}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default RoomSelectButton;

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
