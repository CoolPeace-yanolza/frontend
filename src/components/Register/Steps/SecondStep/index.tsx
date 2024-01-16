import { useState } from 'react';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputCheckBox,
  InputWrapper
} from '@components/Register/common';
import RoomList from './RoomList';

const SecondStep = () => {
  const [roomType, setRoomType] = useState(0);
  const [toAllRoom, setToAllRoom] = useState(0);

  const list = [
    '디럭스',
    '스탠다드 더블',
    'VIP 더블',
    '프리미엄 더블',
    '패밀리 더블',
    '패밀리 더블온돌',
    '스탠다드',
    '스탠다드 트윈'
  ];

  return (
    <>
      <InputContainer title="쿠폰을 적용할 유형을 선택해주세요.">
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
            value={1}
            currentInput={roomType}
            onButtonClick={setRoomType}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={1}
          currentInput={roomType}
        >
          <ContentWrapper>
            <InputCheckBox
              id="severalNights"
              text="2박 이상 적용"
            />
          </ContentWrapper>
        </InputWrapper>
      </InputContainer>
      <InputContainer title="쿠폰을 적용할 객실을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="true"
            name="toAllRoom"
            buttonName="모든 객실"
            value={1}
            onButtonClick={setToAllRoom}
          />
          <InputButton
            type="radio"
            id="false"
            name="toAllRoom"
            buttonName="선택 객실"
            value={2}
            onButtonClick={setToAllRoom}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={2}
          currentInput={toAllRoom}
        >
          <ContentWrapper>
            <RoomList list={list} />
          </ContentWrapper>
        </InputWrapper>
      </InputContainer>
    </>
  );
};

export default SecondStep;

const ButtonWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 23px;
`;

const ContentWrapper = styled.div`
  padding-left: 134px;
`;
