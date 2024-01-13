import styled from '@emotion/styled';

import { InputContainer, InputButton } from '@components/Register/common';

const SecondStep = () => {
  return (
    <>
      <InputContainer description="쿠폰을 적용할 유형을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="checkbox"
            id="dayuse"
            name="roomType"
            buttonName="대실"
          />
          <InputButton
            type="checkbox"
            id="stay"
            name="roomType"
            buttonName="숙박"
          />
        </ButtonWrapper>
      </InputContainer>
      <InputContainer description="쿠폰을 적용할 객실을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="true"
            name="toAllRoom"
            buttonName="모든 객실"
          />
          <InputButton
            type="radio"
            id="false"
            name="toAllRoom"
            buttonName="선택 객실"
          />
        </ButtonWrapper>
      </InputContainer>
    </>
  );
};

export default SecondStep;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 23px;
`;
