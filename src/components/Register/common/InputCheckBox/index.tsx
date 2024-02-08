import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputCheckBoxProps, LabelStyleProps } from '@/types/register';
import checked from '@assets/icons/ic-register-checked.svg';
import unchecked from '@assets/icons/ic-register-unchecked.svg';

const InputCheckBox = ({
  id,
  text,
  isChecked,
  onCheck
}: InputCheckBoxProps) => {
  const handleCheckBox = () => {
    if (onCheck) {
      onCheck();
    }
  };

  return (
    <Container>
      <CheckBox
        type="checkbox"
        id={id}
        defaultChecked={isChecked}
        onChange={handleCheckBox}
      />
      <Label
        htmlFor={id}
        $isChecked={isChecked}
      >
        <CheckIcon
          src={isChecked ? checked : unchecked}
          alt="체크박스 아이콘"
        />
        {text}
      </Label>
    </Container>
  );
};

export default InputCheckBox;

const Container = styled.div`
  margin-top: 9px;

  display: flex;
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

  ${theme.response.tablet} {
    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    font-size: 9px;
  }
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 5px;

  ${theme.response.tablet} {
    width: 2vw;
    height: 2vw;
  }

  @media (max-width: 550px) {
    width: 11px;
    height: 11px;
  }
`;
