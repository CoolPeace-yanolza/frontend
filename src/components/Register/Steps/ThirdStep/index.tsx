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
    setInput({ ...input, whenToUse: e.target.value });
    if (e.target.value !== '하루만') {
      setPreview({ ...preview, day: e.target.value + ' 체크인 시 적용 가능' });
    } else {
      if (input.day) {
        setPreview({ ...preview, day: input.day + ' 체크인 시 적용 가능' });
      }
    }
  };

  return (
    <>
      <InputAccordion
        title="결제금액에 따라 달라요."
        value={input.minimumPrice}
      >
        <ContentWrapper>
          <InputField
            placeholder="ex) 5000"
            defaultValue={input.minimumPrice}
            text="원"
            onInputChange={handleMinimumPriceChange}
          />
          <Text>이상 예약 시 사용 가능</Text>
        </ContentWrapper>
      </InputAccordion>
      <InputAccordion
        title="특정 요일에 사용이 가능해요."
        value={input.whenToUse}
      >
        <RadioWrapper>
          <InputRadio
            id="oneDay"
            name="specificDays"
            value="하루만"
            isChecked={input.whenToUse === '하루만'}
            text="하루만 (선택 요일부터 체크인)"
            onButtonChange={handleDayChange}
          >
            <RadioGroup />
          </InputRadio>
          <InputRadio
            id="weekdays"
            name="specificDays"
            value="평일"
            isChecked={input.whenToUse === '평일'}
            text="평일 (일~목 체크인)"
            onButtonChange={handleDayChange}
          />
          <InputRadio
            id="weekend"
            name="specificDays"
            value="주말"
            isChecked={input.whenToUse === '주말'}
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

  ${theme.response.tablet} {
    font-size: 1.7vw;
  }

  @media (max-width: 550px) {
    font-size: 9px;
  }
`;

const RadioWrapper = styled.div`
  height: 145px;

  display: flex;
  flex-direction: column;
  gap: 17px;

  ${theme.response.tablet} {
    height: 20vw;
  }

  @media (max-width: 550px) {
    height: 110px;
  }
`;
