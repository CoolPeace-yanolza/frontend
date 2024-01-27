import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputRadioProps, InputRadioStyleProps } from '@/types/register';
import selected from '@assets/icons/ic-register-selected.svg';
import unselected from '@assets/icons/ic-register-unselected.svg';

const InputRadio = ({
  id,
  name,
  value,
  isChecked,
  text,
  children,
  onButtonChange
}: InputRadioProps) => {
  const handleButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onButtonChange) {
      onButtonChange(e);
    }
  };

  return (
    <div>
      <Radio
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        $src={selected}
        onChange={handleButtonChange}
      />
      <Label htmlFor={id}>
        <ContentWrapper>
          <SelectIcon
            className="icon"
            $src={unselected}
          />
          {text}
        </ContentWrapper>
      </Label>
      {children && (
        <ChildrenWrapper className="children">{children}</ChildrenWrapper>
      )}
    </div>
  );
};

export default InputRadio;

const Radio = styled.input<InputRadioStyleProps>`
  display: none;

  &:checked + label {
    color: ${theme.colors.hover};
  }

  &:checked + label .icon {
    background: url(${props => props.$src});
  }

  &:checked ~ .children {
    display: block;
  }
`;

const Label = styled.label`
  display: inline-block;

  color: #757676;
  font-size: 15px;

  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectIcon = styled.div<InputRadioStyleProps>`
  width: 24px;
  height: 24px;

  margin-right: 5px;

  background: url(${props => props.$src});
`;

const ChildrenWrapper = styled.div`
  margin-top: 6px;
  padding-left: 29px;

  display: none;
`;
