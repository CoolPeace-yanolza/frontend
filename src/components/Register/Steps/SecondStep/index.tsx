import ReactDOM from 'react-dom';
import { useState } from 'react';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputCheckBox,
  InputWrapper
} from '@components/Register/common';
import RoomSelectModal from './RoomSelectModal';
import RoomSelectButton from './RoomSelectButton';
import RoomList from './RoomList';
import { RoomsType } from '@/types/register';

const SecondStep = () => {
  const [roomType, setRoomType] = useState(0);
  const [toAllRoom, setToAllRoom] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState<RoomsType>([]);

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <RoomSelectModal
            value={2}
            setToAllRoom={setToAllRoom}
            rooms={rooms}
            setRooms={setRooms}
            onButtonClick={setIsOpen}
          />,
          document.getElementById('modal-root') as HTMLElement
        )}
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
            state={1}
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
            state={1}
            onButtonClick={setToAllRoom}
          />
          <RoomSelectButton
            type="radio"
            id="false"
            name="toAllRoom"
            buttonName="선택 객실"
            rooms={rooms.length}
            onButtonClick={setIsOpen}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={2}
          currentInput={toAllRoom}
        >
          <ContentWrapper>
            <RoomList rooms={rooms} />
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
