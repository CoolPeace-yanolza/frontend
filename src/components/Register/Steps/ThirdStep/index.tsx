import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  InputAccordion,
  InputField,
  InputRadio
} from '@components/Register/common';
import RadioGroup from './RadioGroup';

const ThirdStep = () => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue !== filteredValue) {
      e.currentTarget.value = filteredValue;
    }
  };

  return (
    <>
      <InputAccordion title="결제금액에 따라 달라요.">
        <ContentWrapper>
          <InputField
            placeholder="ex) 5000"
            text="원"
            onInputChange={handleInput}
          />
          <Text>이상 예약 시 사용 가능</Text>
        </ContentWrapper>
      </InputAccordion>
      <InputAccordion title="특정 요일에 사용이 가능해요.">
        <RadioWrapper>
          <InputRadio
            id="oneDay"
            name="specificDays"
            text="하루만 (선택 요일부터 체크인)"
          >
            <RadioGroup />
          </InputRadio>
          <InputRadio
            id="weekdays"
            name="specificDays"
            text="평일 (일~목 체크인)"
          />
          <InputRadio
            id="weekend"
            name="specificDays"
            text="주말 (금~토 체크인)"
          />
        </RadioWrapper>
      </InputAccordion>
    </>
  );
};

export default ThirdStep;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: ${theme.colors.hover};
  font-size: 15px;
`;

const RadioWrapper = styled.div`
  height: 145px;

  display: flex;
  flex-direction: column;
  gap: 17px;
`;
