import styled from '@emotion/styled';

import theme from '@styles/theme';
import { RadioProps } from '@/types/register';

const Radio = ({
  id,
  name,
  value,
  isChecked,
  text,
  onButtonChange
}: RadioProps) => {
  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onButtonChange) {
      onButtonChange(e);
    }
  };

  return (
    <>
      <RadioButton
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        onChange={handleButtonChange}
      />
      <Label htmlFor={id}>{text}</Label>
    </>
  );
};

export default Radio;

const RadioButton = styled.input`
  display: none;

  &:checked + label {
    border: none;

    color: #fff;

    background-color: ${theme.colors.hover};
  }
`;

const Label = styled.label`
  width: 32px;
  height: 32px;

  border-radius: 5px;
  border: 1px solid #979c9e;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #979c9e;
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  ${theme.response.tablet} {
    width: 4vw;
    height: 4vw;

    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    width: 22px;
    height: 22px;

    font-size: 9px;
  }
`;
