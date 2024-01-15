import { useState } from 'react';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputField,
  InputCheckBox
} from '@components/Register/common';
import { LimitWrapperStyleProps } from '@/types/register';

const FirstStep = () => {
  const [currentInput, setCurrentInput] = useState(0);
  const [isLimit, setIsLimit] = useState(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {};

  return (
    <>
      <InputContainer title="쿠폰의 이름을 입력해주세요.">
        <Input placeholder="20자 내외로 입력하세요. ex) 크리스마스 이벤트 1" />
      </InputContainer>
      <InputContainer title="누구에게 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="all"
            name="customerType"
            buttonName="모든 고객"
          />
          <InputButton
            type="radio"
            id="first"
            name="customerType"
            buttonName="첫방문 고객"
          />
          <InputButton
            type="radio"
            id="revisit"
            name="customerType"
            buttonName="재방문 고객"
          />
        </ButtonWrapper>
      </InputContainer>
      <InputContainer title="어떤 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="price"
            name="discountType"
            buttonName="정액 할인"
            value={1}
            onButtonClick={setCurrentInput}
          />
          <InputButton
            type="radio"
            id="rate"
            name="discountType"
            buttonName="정률 할인"
            value={2}
            onButtonClick={setCurrentInput}
          />
        </ButtonWrapper>
        <ContentWrapper>
          <InputField
            placeholder="ex) 5000"
            text="원"
            whichInput={1}
            currentInput={currentInput}
            onInputChange={handleInput}
          />
          <InnerContentWrapper>
            <InputField
              placeholder="ex) 50"
              text="% 할인"
              whichInput={2}
              currentInput={currentInput}
              onInputChange={handleInput}
            />
            <InputCheckBox
              id="discountLimit"
              whichInput={2}
              currentInput={currentInput}
              text="최대 할인 한도 설정하기"
              onChecked={setIsLimit}
            />
          </InnerContentWrapper>
          <LimitWrapper $isLimit={isLimit}>
            <InputField
              placeholder="ex) 5000"
              text="원"
              whichInput={2}
              currentInput={currentInput}
              onInputChange={handleInput}
            />
          </LimitWrapper>
        </ContentWrapper>
      </InputContainer>
    </>
  );
};

export default FirstStep;

const Input = styled.input`
  width: 348px;
  height: 40px;

  margin-top: 20px;
  border: none;
  border-radius: 30px;

  background-color: #f2f4f5;

  font-size: 15px;
  font-weight: 600;
  text-indent: 15px;

  outline: none;

  &::placeholder {
    color: #979C9e;
  }
}
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 23px;
`;

const ContentWrapper = styled.div`
  width: 100%;

  margin-top: 9px;

  display: inline-block;
`;

const InnerContentWrapper = styled.div`
  display: flex;
`;

const LimitWrapper = styled.div<LimitWrapperStyleProps>`
  display: ${props => (props.$isLimit ? 'block' : 'none')};
`;
