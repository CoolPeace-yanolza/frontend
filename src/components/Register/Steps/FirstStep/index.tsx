import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputField,
  InputCheckBox,
  InputWrapper,
  ErrorMessage
} from '@components/Register/common';
import { LimitWrapperStyleProps } from '@/types/register';
import {
  registerInputState,
  registerValidState,
  previewState
} from '@recoil/index';

const FirstStep = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [isValid, setIsValid] = useRecoilState(registerValidState);
  const [preview, setPreview] = useRecoilState(previewState);

  const [currentInput, setCurrentInput] = useState(0);
  const [isLimited, setIsLimited] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, title: e.target.value });
    setIsValid(prev => ({
      ...prev,
      isTitleValid: true
    }));
  };

  const handleCustomerTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, customerType: e.target.value });
    setPreview({ ...preview, customer: e.target.value + ' 대상' });
    setIsValid(prev => ({
      ...prev,
      isCustomerTypeValid: true
    }));
  };

  const handleDiscountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, discountType: e.target.value });
    setIsValid(prev => ({
      ...prev,
      isDiscountTypeValid: true,
      isDiscountFlatValid: true,
      isDiscountFlatRateValid: true,
      isMaximumDiscountValid: true,
      isThousands: true
    }));
  };

  const handleDiscountFlatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, discountFlat: e.target.value });
    setPreview({
      ...preview,
      discount: Number(e.target.value).toLocaleString() + '원 할인'
    });
    setIsValid(prev => ({
      ...prev,
      isDiscountFlatValid: true,
      isThousands: true
    }));
  };

  const handleDiscountFlatRateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({ ...input, discountFlatRate: e.target.value });
    setPreview({
      ...preview,
      discount: e.target.value + '% 할인'
    });
    setIsValid(prev => ({
      ...prev,
      isDiscountFlatRateValid: true,
      isMaximumDiscountValid: true,
      isThousands: true
    }));
  };

  const handleLabelChange = () => {
    setIsLimited(prev => !prev);
    setInput(prev => ({
      ...prev,
      hasLimit: !isLimited
    }));
    setIsValid(prev => ({
      ...prev,
      isDiscountFlatRateValid: true,
      isMaximumDiscountValid: true,
      isThousands: true
    }));
  };

  const handleMaximumDiscountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({ ...input, maximumDiscount: e.target.value });
    setIsValid(prev => ({
      ...prev,
      isDiscountFlatRateValid: true,
      isMaximumDiscountValid: true,
      isThousands: true
    }));
  };

  return (
    <>
      <InputContainer title="쿠폰의 이름을 입력해주세요.">
        <Input
          maxLength={20}
          placeholder="20자 내외로 입력하세요. ex) 크리스마스 이벤트 1"
          onChange={handleTitleChange}
        />
        {!isValid.isTitleValid && (
          <ErrorMessage>쿠폰명 입력은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer title="누구에게 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="all"
            name="customerType"
            value="모든 고객"
            isChecked={input.customerType === '모든 고객'}
            buttonName="모든 고객"
            onButtonChange={handleCustomerTypeChange}
          />
          <InputButton
            type="radio"
            id="first"
            name="customerType"
            value="첫방문 고객"
            isChecked={input.customerType === '첫방문 고객'}
            buttonName="첫방문 고객"
            onButtonChange={handleCustomerTypeChange}
          />
          <InputButton
            type="radio"
            id="revisit"
            name="customerType"
            value="재방문 고객"
            isChecked={input.customerType === '재방문 고객'}
            buttonName="재방문 고객"
            onButtonChange={handleCustomerTypeChange}
          />
        </ButtonWrapper>
        {!isValid.isCustomerTypeValid && (
          <ErrorMessage>쿠폰 제공 대상 설정은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer title="어떤 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="price"
            name="discountType"
            value="정액 할인"
            isChecked={input.customerType === '정액 할인'}
            buttonName="정액 할인"
            state={1}
            setState={setCurrentInput}
            onButtonChange={handleDiscountTypeChange}
          />
          <InputButton
            type="radio"
            id="rate"
            name="discountType"
            value="정률 할인"
            isChecked={input.customerType === '정률 할인'}
            buttonName="정률 할인"
            state={2}
            setState={setCurrentInput}
            onButtonChange={handleDiscountTypeChange}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={1}
          currentInput={currentInput}
        >
          <InputField
            placeholder="ex) 5000"
            text="원"
            onInputChange={handleDiscountFlatChange}
          />
        </InputWrapper>
        <InputWrapper
          whichInput={2}
          currentInput={currentInput}
        >
          <ContentWrapper>
            <InputField
              placeholder="ex) 50"
              text="% 할인"
              onInputChange={handleDiscountFlatRateChange}
            />
            <InputCheckBox
              id="discountLimit"
              text="최대 할인 한도 설정하기"
              onCheck={handleLabelChange}
            />
          </ContentWrapper>
        </InputWrapper>
        <LimitWrapper $isLimited={isLimited}>
          <InputWrapper
            whichInput={2}
            currentInput={currentInput}
          >
            <InputField
              placeholder="ex) 5000"
              text="원"
              onInputChange={handleMaximumDiscountChange}
            />
          </InputWrapper>
        </LimitWrapper>
        {!isValid.isDiscountTypeValid && (
          <ErrorMessage>쿠폰 할인 설정은 필수입니다.</ErrorMessage>
        )}
        {(!isValid.isDiscountFlatValid ||
          !isValid.isDiscountFlatRateValid ||
          !isValid.isMaximumDiscountValid) && (
          <ErrorMessage>숫자로 입력해주세요.</ErrorMessage>
        )}
        {!isValid.isThousands && (
          <ErrorMessage>1,000 원 단위로 입력 가능합니다.</ErrorMessage>
        )}
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
  display: flex;
`;

const LimitWrapper = styled.div<LimitWrapperStyleProps>`
  display: ${props => (props.$isLimited ? 'block' : 'none')};
`;
