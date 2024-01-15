import { useState } from 'react';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  InputCheckBoxProps,
  InputCheckBoxContainerStyleProps,
  LabelStyleProps,
  CheckIconStyleProps
} from '@/types/register';
import checked from '@assets/icons/ic-register-checked.svg';
import unchecked from '@assets/icons/ic-register-unchecked.svg';

const InputCheckBox = ({
  id,
  whichInput,
  currentInput,
  text,
  onChecked
}: InputCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    if (onChecked) {
      onChecked(prev => !prev);
    }
    setIsChecked(prev => !prev);
  };

  return (
    <Container $isSelected={whichInput === currentInput}>
      <CheckBox
        type="checkbox"
        id={id}
        onChange={handleCheckBox}
      />
      <Label
        htmlFor={id}
        $isChecked={isChecked}
      >
        <CheckIcon $src={isChecked ? checked : unchecked} />
        {text}
      </Label>
    </Container>
  );
};

export default InputCheckBox;

const Container = styled.div<InputCheckBoxContainerStyleProps>`
  display: ${props => (props.$isSelected ? 'flex' : 'none')};
  align-items: center;
`;

const CheckBox = styled.input`
  display: none;
`;

const Label = styled.label<LabelStyleProps>`
  display: flex;
  align-items: center;

  color: ${props => (props.$isChecked ? theme.colors.hover : '#757676')};
  font-size: 15px;
`;

const CheckIcon = styled.div<CheckIconStyleProps>`
  width: 20px;
  height: 20px;

  margin-right: 5px;

  background: url(${props => props.$src}) no-repeat;
`;
