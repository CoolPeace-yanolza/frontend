import styled from '@emotion/styled';

import { InputContainer, InputButton } from '@components/Register/common';

const FirstStep = () => {
  return (
    <>
      <InputContainer description="쿠폰의 이름을 입력해주세요.">
        <Input placeholder="20자 내외로 입력하세요. ex) 크리스마스 이벤트 1" />
      </InputContainer>
      <InputContainer description="누구에게 쿠폰을 제공하시겠어요?">
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
      <InputContainer description="어떤 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="price"
            name="discountType"
            buttonName="정액 할인"
          />
          <InputButton
            type="radio"
            id="rate"
            name="discountType"
            buttonName="정률 할인"
          />
        </ButtonWrapper>
      </InputContainer>
    </>
  );
};

export default FirstStep;

const Input = styled.input`
  width: 348px;
  height: 40px;

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
  display: flex;
  gap: 23px;
`;
