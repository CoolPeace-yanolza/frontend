import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  InputAccordion,
  InputField,
  InputRadio
} from '@components/Register/common';
import RadioGroup from './RadioGroup';
import { registerInputState, previewState } from '@recoil/index';

const ThirdStep = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [preview, setPreview] = useRecoilState(previewState);

  const handleMinimumPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, minimumPrice: e.target.value });
    setPreview({
      ...preview,
      minimumPrice: Number(e.target.value).toLocaleString() + '원 이상 결제 시'
    });
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput({ ...input, day: e.target.value });
    setPreview({ ...preview, day: e.target.value + ' 체크인 시 적용 가능' });
  };

  return (
    <>
      <InputAccordion title="결제금액에 따라 달라요.">
        <ContentWrapper>
          <InputField
            placeholder="ex) 5000"
            text="원"
            onInputChange={handleMinimumPriceChange}
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
            value="평일"
            text="평일 (일~목 체크인)"
            onButtonChange={handleDayChange}
          />
          <InputRadio
            id="weekend"
            name="specificDays"
            value="주말"
            text="주말 (금~토 체크인)"
            onButtonChange={handleDayChange}
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
