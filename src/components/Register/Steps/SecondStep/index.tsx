import ReactDOM from 'react-dom';
import { useState } from 'react';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputCheckBox,
  InputWrapper
} from '@components/Register/common';
import RoomModal from './RoomModal';
import RoomSelectButton from './RoomSelectButton';
import RoomList from './RoomList';

const SecondStep = () => {
  const [roomType, setRoomType] = useState(0);
  const [toAllRoom, setToAllRoom] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <RoomModal
            value={2}
            setToAllRoom={setToAllRoom}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
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
          <RoomSelectButton
            type="radio"
            id="false"
            name="toAllRoom"
            buttonName="선택 객실"
            selectedRooms={selectedRooms.length}
            onButtonClick={setIsOpen}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={2}
          currentInput={toAllRoom}
          isOpen={isOpen}
        >
          <ContentWrapper>
            <RoomList list={selectedRooms} />
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
